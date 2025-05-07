import { config } from "./config";
import { toUserFriendlyAddress  } from  "@tonconnect/ui-react";

const search_token_by_id = (id:string) =>
{
    for(const i in config.chains)
    {
        if(config.chains[i].id == id.toUpperCase())
        {
            return config.chains[i];
        }
    }
    return false
}

export function toNoBounceAddress(rawAddress: string): string {
    return toUserFriendlyAddress(rawAddress, false);
  }
export {
    search_token_by_id
}