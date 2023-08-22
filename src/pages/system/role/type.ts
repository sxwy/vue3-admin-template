/** 单条角色数据 */
export interface RoleItem {
  /** id */
  id: string
  /** 名称 */
  name: string
  /**
   * 状态
   * - 1-正常
   * - 0-禁用
   */
  state: number
  /** 状态对应的字符串（前端映射值，实际服务端没返回） */
  stateStr: string
}
