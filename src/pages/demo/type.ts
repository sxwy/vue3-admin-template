/** 配置信息 */
export interface ConfigInfo {
  /** 学校名称 */
  schoolName: string
  /** 班级名称 */
  gradeName: string
  /** 报名开始时间yyyy-MM-ddHH:mm */
  enrollStartTime: string
  /** 报名结束时间yyyy-MM-ddHH:mm */
  enrollEndTime: string
  /** 招生简介（招生宣传）富文本 */
  enrollAdvert: string
  /** 出生限制-开始yyyy-MM-dd */
  birthLimitStart: string
  /** 出生限制-结束yyyy-MM-dd */
  birthLimitEnd: string
  /** 计划招生人数 */
  planEnrollNum: number
  /** 已招人数 */
  enrolledNum: number
  /** 剩余名额 */
  remainNum: number
  /** 预报名信息中的 banner 提示信息 */
  title: string
}
