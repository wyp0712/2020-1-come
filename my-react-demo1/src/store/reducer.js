const defaultState = { // 数据仓库

}

export default (state = defaultState, action) => {
  // 拷贝数据，修改数据 返回确定数据
  const newState = JSON.parse(JSON.stringify(state));
  
  

  return newState;
}