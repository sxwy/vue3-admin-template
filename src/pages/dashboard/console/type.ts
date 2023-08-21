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
  stateStr: string
}
