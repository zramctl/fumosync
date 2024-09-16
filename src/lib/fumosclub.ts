const USER_AGENT = "fumosync (github.com/zramctl/fumosync)";

export interface Script {
  description: string;
  source: {
    main: string;
    modules: {
      [name: string]: string;
    };
  };
}

export interface AccountDetails {
  name: string;
  robloxUser: string;
  discordUserId: string;
  numSessions: number;
}

export class Client {
  cookie: string;

  constructor(auth: string) {
    this.cookie = auth;
  }

  async details(): Promise<AccountDetails> {
    const res: AccountDetails = await fetch(
      "https://fumosclubv1.vercel.app/api/account/getdetails",
      {
        credentials: "include",
        headers: {
          "User-Agent": USER_AGENT,
          Accept: "*/*",
          "Accept-Language": "en-US,en;q=0.5",
          "Sec-Fetch-Dest": "empty",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Site": "same-origin",
          Priority: "u=4",
          Cookie: `session=${this.cookie}`,
        },
        referrer: "https://fumosclubv1.vercel.app/",
        method: "GET",
        mode: "cors",
      }
    )
      .then((res) => res.json())
      .then((res) => {
        return {
          ...res,
        } as AccountDetails;
      });

    return res;
  }

  async save(script: string, data: Script) {
    const res = await fetch(
      "https://fumosclubv1.vercel.app/api/script/editor",
      {
        credentials: "include",
        headers: {
          "User-Agent": USER_AGENT,
          Accept: "*/*",
          "Accept-Language": "en-US,en;q=0.5",
          "content-type": "application/json",
          "Sec-Fetch-Dest": "empty",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Site": "same-origin",
          Cookie: `session=${this.cookie}`,
          Priority: "u=0",
        },
        referrer: "https://fumosclubv1.vercel.app/editor/" + script,
        // body: `{"scriptId":"${script}","scriptInfo":{"source":{}}}`,
        body: JSON.stringify({
          scriptId: script,
          scriptInfo: {
            description: data.description,
            source: {
              ...data.source,
            },
          },
        }),
        method: "PUT",
        mode: "cors",
      }
    );
  }
}
