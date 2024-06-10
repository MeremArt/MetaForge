export type IDL = {
  version: "0.1.0";
  name: "bb_nft";
  instructions: [
    {
      name: "init";
      accounts: [
        {
          name: "signer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "whitelist";
          isMut: true;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: "createTree";
      accounts: [
        {
          name: "signer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "treeConfig";
          isMut: true;
          isSigner: false;
        },
        {
          name: "merkleTree";
          isMut: true;
          isSigner: false;
        },
        {
          name: "treeOwner";
          isMut: false;
          isSigner: false;
        },
        {
          name: "mplBubblegumProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "logWrapper";
          isMut: false;
          isSigner: false;
        },
        {
          name: "compressionProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "maxDepth";
          type: "u32";
        },
        {
          name: "maxBufferSize";
          type: "u32";
        }
      ];
    },
    {
      name: "whitelistToken";
      accounts: [
        {
          name: "signer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "whitelist";
          isMut: true;
          isSigner: false;
        },
        {
          name: "mint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: "delistToken";
      accounts: [
        {
          name: "signer";
          isMut: false;
          isSigner: true;
        },
        {
          name: "whitelist";
          isMut: true;
          isSigner: false;
        },
        {
          name: "mint";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: "mintCnft";
      accounts: [
        {
          name: "signer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "assetInfo";
          isMut: false;
          isSigner: false;
        },
        {
          name: "treeConfig";
          isMut: true;
          isSigner: false;
        },
        {
          name: "merkleTree";
          isMut: true;
          isSigner: false;
        },
        {
          name: "treeOwner";
          isMut: false;
          isSigner: false;
        },
        {
          name: "nftCollection";
          isMut: false;
          isSigner: false;
        },
        {
          name: "mplBubblegumProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "logWrapper";
          isMut: false;
          isSigner: false;
        },
        {
          name: "compressionProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "symbol";
          type: "string";
        }
      ];
    },
    {
      name: "burnCnft";
      accounts: [
        {
          name: "signer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "merkleTree";
          isMut: true;
          isSigner: false;
          docs: ["CHECKED: this account is checked in the instruction"];
        },
        {
          name: "stakeInfo";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenVault";
          isMut: true;
          isSigner: false;
        },
        {
          name: "signerTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "cnft";
          isMut: false;
          isSigner: false;
          docs: ["ensure this nft is owned by the signer"];
        },
        {
          name: "treeConfig";
          isMut: false;
          isSigner: false;
          docs: ["CHECKED: this account is checked in the instruction"];
        },
        {
          name: "logWrapper";
          isMut: false;
          isSigner: false;
        },
        {
          name: "compressionProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "bubblegumProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "root";
          type: {
            array: ["u8", 32];
          };
        },
        {
          name: "dataHash";
          type: {
            array: ["u8", 32];
          };
        },
        {
          name: "creatorHash";
          type: {
            array: ["u8", 32];
          };
        },
        {
          name: "nonce";
          type: "u64";
        },
        {
          name: "index";
          type: "u32";
        }
      ];
    },
    {
      name: "transferCnft";
      accounts: [
        {
          name: "signer";
          isMut: false;
          isSigner: true;
        },
        {
          name: "destination";
          isMut: false;
          isSigner: false;
        },
        {
          name: "stakeInfo";
          isMut: true;
          isSigner: false;
        },
        {
          name: "nft";
          isMut: false;
          isSigner: false;
        },
        {
          name: "treeConfig";
          isMut: true;
          isSigner: false;
        },
        {
          name: "merkleTree";
          isMut: true;
          isSigner: false;
        },
        {
          name: "mplBubblegumProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "logWrapper";
          isMut: false;
          isSigner: false;
        },
        {
          name: "compressionProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "root";
          type: {
            array: ["u8", 32];
          };
        },
        {
          name: "dataHash";
          type: {
            array: ["u8", 32];
          };
        },
        {
          name: "creatorHash";
          type: {
            array: ["u8", 32];
          };
        },
        {
          name: "nonce";
          type: "u64";
        },
        {
          name: "index";
          type: "u32";
        }
      ];
    },
    {
      name: "lockFund";
      accounts: [
        {
          name: "signer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "cnft";
          isMut: false;
          isSigner: false;
        },
        {
          name: "assetInfo";
          isMut: false;
          isSigner: false;
        },
        {
          name: "signerTokenAta";
          isMut: true;
          isSigner: false;
        },
        {
          name: "cnftStakeVault";
          isMut: true;
          isSigner: false;
        },
        {
          name: "stakeInfo";
          isMut: true;
          isSigner: false;
        },
        {
          name: "whitelist";
          isMut: false;
          isSigner: false;
        },
        {
          name: "txTokenMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    }
  ];
  accounts: [
    {
      name: "Asset";
      type: {
        kind: "struct";
        fields: [
          {
            name: "id";
            type: "publicKey";
          },
          {
            name: "name";
            type: "string";
          },
          {
            name: "metadataUrl";
            type: "string";
          },
          {
            name: "price";
            type: "u64";
          },
          {
            name: "lastUpdated";
            type: "u64";
          },
          {
            name: "reputation";
            type: {
              defined: "Reputation";
            };
          },
          {
            name: "authority";
            type: "publicKey";
          }
        ];
      };
    },
    {
      name: "StakeInfo";
      type: {
        kind: "struct";
        fields: [
          {
            name: "owner";
            type: "publicKey";
          }
        ];
      };
    },
    {
      name: "TokenWhitelist";
      type: {
        kind: "struct";
        fields: [
          {
            name: "tokens";
            type: {
              vec: "publicKey";
            };
          }
        ];
      };
    }
  ];
  types: [
    {
      name: "Reputation";
      type: {
        kind: "enum";
        variants: [
          {
            name: "Low";
          },
          {
            name: "Medium";
          },
          {
            name: "High";
          }
        ];
      };
    }
  ];
  errors: [
    {
      code: 6000;
      name: "InSufficientToken";
      msg: "Insufficient token balance";
    },
    {
      code: 6001;
      name: "InSufficientSol";
      msg: "Insufficient sol balance";
    },
    {
      code: 6002;
      name: "TokenAlreadyWhitelisted";
      msg: "Token already whitelisted";
    },
    {
      code: 6003;
      name: "TokenNotWhitelisted";
      msg: "Token is not whitelisted";
    }
  ];
  metadata: {
    address: "23UbaEAHYvXWG3Af7BeVVsSDHfS3HcxHiWqSGrZR7S86";
  };
};
