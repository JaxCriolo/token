import * as ConfigModuleEth from "./configEth";
import * as ConfigModuleBnb from "./configBnb";

import IconEth from "../assets/images/token/eth.png";
import IconBnb from "../assets/images/token/bnb.png";

const chains = {
  BNB: {
    id: 1,
    icon: IconBnb,
    name: "BNB Smart Chain",
    chainId: 56,
    configModule: ConfigModuleBnb,
    payWith: "BNB",
    title: "Buy on BNB",
  },
  ETH: {
    id: 2,
    icon: IconEth,
    name: "Sepolia Testnet",
    chainId: 11155111,
    configModule: ConfigModuleEth,
    payWith: "ETH",
    title: "Buy on ETH",
  },
};

export const chainInfo = [
  {
    ...chains.ETH,
    buyChainId: chains.BNB.chainId,
    buyTitle: chains.BNB.title,
    buyIcon: chains.BNB.icon,
    buyConfigModule: chains.BNB.configModule,
  },
  {
    ...chains.BNB,
    buyChainId: chains.ETH.chainId,
    buyTitle: chains.ETH.title,
    buyIcon: chains.ETH.icon,
    buyConfigModule: chains.ETH.configModule,
  },
];

export const chainConfig = (chainId) => {
  const config = chainInfo.find((item) => item.chainId === chainId);

  return config || chainInfo[0];
};
