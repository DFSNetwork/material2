// 充值配置
export const rechargeConfig = {
  USDT: [
    {
      open: true, // 允许充值
      name: 'Tron(TRC20)', // 网络名称
      blocks: 1, // 确认快
      min: 1, // 最小充值
      time: '≈ 10 Min', // 预计到账时间
      address: '-', // 充值地址(项目方接收代币地址)
      contract: '', // 代币在这个网络下的合约地址
      useMemo: false, // 是否需要使用memo
      needGetDepositAddr: true, // 是否需要获取充值地址
      chain: 'TRON'
    },
    {
      open: true, // 允许充值
      name: 'EOS', // 网络名称
      blocks: 1, // 确认快
      min: 1, // 最小充值
      time: '≈ 10 Min', // 预计到账时间
      address: 'eosbridgedfs', // 充值地址(项目方接收代币地址)
      contract: 'tethertether', // 代币在这个网络下的合约地址
      useMemo: true, // 是否需要使用memo
      needGetDepositAddr: false, // 是否需要获取充值地址
      chain: 'EOS'
    },
    // {
    //   open: false, // 允许充值
    //   name: 'BNB Smart Chain(BEP20)', // 网络名称
    //   blocks: 1, // 确认快
    //   min: 1, // 最小充值
    //   time: '≈ 10 Min', // 预计到账时间
    //   address: 'eosbridgedfs', // 充值地址(项目方接收代币地址)
    //   contract: 'tethertether', // 代币在这个网络下的合约地址
    //   useMemo: false, // 是否需要使用memo
    //   needGetDepositAddr: true, // 是否需要获取充值地址
    //   chain: 'BSC'
    // },
  ],
  DFS: [
    {
      open: true, // 允许充值
      name: 'EOS', // 网络名称
      blocks: 1, // 确认快
      min: 1, // 最小充值
      time: '≈ 10 Min', // 预计到账时间
      address: 'eosbridgedfs', // 充值地址(项目方接收代币地址)
      contract: 'minedfstoken', // 代币在这个网络下的合约地址
      useMemo: true, // 是否需要使用memo
      needGetDepositAddr: false,
      chain: 'EOS'
    },
    {
      open: true, // 允许充值
      name: 'ORDI-BRC20', // 网络名称
      blocks: 3, // 确认快
      min: 1, // 最小充值
      time: '≈ 6 Hour', // 预计到账时间
      address: '-', // 充值地址(项目方接收代币地址)
      contract: '', // 代币在这个网络下的合约地址
      useMemo: false, // 是否需要使用memo
      needGetDepositAddr: true,
      chain: 'BTC'
    },
  ],
  BTC: [
    {
      open: true, // 允许充值
      name: 'Bitcoin', // 网络名称
      blocks: 3, // 确认快
      min: 0.01, // 最小充值
      time: '≈ 6 Hour', // 预计到账时间
      address: '-', // 充值地址(项目方接收代币地址)
      contract: '', // 代币在这个网络下的合约地址
      useMemo: false, // 是否需要使用memo
      needGetDepositAddr: true,
      chain: 'BTC'
    },
  ],
  ORDI: [
    {
      open: true, // 允许充值
      name: 'ORDI-BRC20', // 网络名称
      blocks: 3, // 确认快
      min: 1, // 最小充值
      time: '≈ 6 Hour', // 预计到账时间
      address: '-', // 充值地址(项目方接收代币地址)
      contract: '', // 代币在这个网络下的合约地址
      useMemo: false, // 是否需要使用memo
      needGetDepositAddr: true,
      chain: 'BTC'
    },
  ],
  SATS: [
    {
      open: true, // 允许充值
      name: 'ORDI-BRC20', // 网络名称
      blocks: 3, // 确认快
      min: 1, // 最小充值
      time: '≈ 6 Hour', // 预计到账时间
      address: '-', // 充值地址(项目方接收代币地址)
      contract: '', // 代币在这个网络下的合约地址
      useMemo: false, // 是否需要使用memo
      needGetDepositAddr: true,
      chain: 'BTC'
    },
  ],
  RATS: [
    {
      open: true, // 允许充值
      name: 'ORDI-BRC20', // 网络名称
      blocks: 3, // 确认快
      min: 1, // 最小充值
      time: '≈ 6 Hour', // 预计到账时间
      address: '-', // 充值地址(项目方接收代币地址)
      contract: '', // 代币在这个网络下的合约地址
      useMemo: false, // 是否需要使用memo
      needGetDepositAddr: true,
      chain: 'BTC'
    },
  ],
  MMSS: [
    {
      open: true, // 允许充值
      name: 'ORDI-BRC20', // 网络名称
      blocks: 3, // 确认快
      min: 1.0, // 最小充值
      time: '≈ 6 Hour', // 预计到账时间
      address: '-', // 充值地址(项目方接收代币地址)
      contract: '', // 代币在这个网络下的合约地址
      useMemo: false, // 是否需要使用memo
      needGetDepositAddr: true,
      chain: 'BTC'
    },
  ],
};

// 提现配置
export const withdrawConfig = {
  USDT: [
    {
      open: true, // 允许提现
      name: 'Tron(TRC20)', // 网络名称
      blocks: 1, // 确认快
      min: '10.00000000', // 最小充值
      fee: 1, // 手续费
      feeToken: 'USDT', // 手续费代币 - 没有该属性默认 DFS为手续费
      time: '≈ 10 Min', // 预计到账时间
      contract: '', // 代币在这个网络下的合约地址
      useMemo: false, // 是否需要使用memo
      chain: 'TRON'
    },
    {
      open: true, // 允许提现
      name: 'EOS', // 网络名称
      min: 1, // 最小提现
      blocks: 1, // 确认快
      fee: 1, // 手续费
      feeToken: 'USDT', // 手续费代币 - 没有该属性默认 DFS为手续费
      useMemo: true, // 是否需要使用memo
      time: '≈ 10 Min', // 预计到账时间
      contract: 'tethertether', // 代币在这个网络下的合约地址
      chain: 'EOS'
    },
    // {
    //   open: false, // 允许提现
    //   name: 'BNB Smart Chain(BEP20)', // 网络名称
    //   blocks: 1, // 确认快
    //   min: 1, // 最小充值
    //   time: '≈ 10 Min', // 预计到账时间
    //   contract: '', // 代币在这个网络下的合约地址
    //   useMemo: false, // 是否需要使用memo
    //   chain: 'BSC'
    // },
  ],
  BTC: [
    {
      open: true, // 允许提现
      name: 'Bitcoin', // 网络名称
      min: 0.005, // 最小提现
      blocks: 5, // 确认快
      fee: 5, // 手续费
      useMemo: false, // 是否需要使用memo
      time: '≈ 12 Hour', // 预计到账时间
      contract: '', // 代币在这个网络下的合约地址
      chain: 'BTC'
    },
  ],
  ORDI: [
    {
      open: true, // 允许提现
      name: 'ORDI-BRC20', // 网络名称
      min: 1, // 最小提现
      blocks: 5, // 确认快
      fee: 10, // 手续费
      useMemo: false, // 是否需要使用memo
      time: '≈ 12 Hour', // 预计到账时间
      contract: '', // 代币在这个网络下的合约地址
      chain: 'BTC'
    },
  ],
  SATS: [
    {
      open: true, // 允许提现
      name: 'ORDI-BRC20', // 网络名称
      min: 1, // 最小提现
      blocks: 5, // 确认快
      fee: 10, // 手续费
      useMemo: false, // 是否需要使用memo
      time: '≈ 2 Hour', // 预计到账时间
      contract: '', // 代币在这个网络下的合约地址
      chain: 'BTC'
    },
  ],
  RATS: [
    {
      open: true, // 允许提现
      name: 'ORDI-BRC20', // 网络名称
      min: 1, // 最小提现
      blocks: 5, // 确认快
      fee: 10, // 手续费
      useMemo: false, // 是否需要使用memo
      time: '≈ 12 Hour', // 预计到账时间
      contract: '', // 代币在这个网络下的合约地址
      chain: 'BTC'
    },
  ],
  MMSS: [
    {
      open: true, // 允许提现
      name: 'ORDI-BRC20', // 网络名称
      min: 1, // 最小提现
      blocks: 5, // 确认快
      fee: 10, // 手续费
      useMemo: false, // 是否需要使用memo
      time: '≈ 12 Hour', // 预计到账时间
      contract: '', // 代币在这个网络下的合约地址
      chain: 'BTC'
    },
  ],
};
