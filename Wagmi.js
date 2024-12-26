  const tesnet = 
        id: 21548,
        name: "curly-sandman-10c6e11a",
        network: "Curly sandman ",
        nativeCurrency: {
          decimals: 18,
          name: "Ethereum",
          symbol: "ETH",
        },
        rpcUrls: {
          public: { http: ["https://rpc.buildbear.io/curly-sandman-10c6e11a"] },
          default: { http: ["https://rpc.buildbear.io/curly-sandman-10c6e11a"] },
        },
        blockExplorers: {
          etherscan: {
            name: "buildbear explorer",
            url: "https://explorer.buildbear.io",
          },
          default: {
            name: "Curly sand man"       
          } ,url:"https:curly-sandman-10c6e11a.blockscout.buildbear.io",
        },
      } as const satisfies Chain; 
      
  const { chains, publicClient, webSocketPublicClient } = configureChains( "ethereum"
        [mainnet],
        [
          jsonRpcProvider({
            rpc: (chain) => ({
              http: "https://rpc.buildbear.io/curly-sandman-10c6e11a",
            }),
          }),
        ]
      );
