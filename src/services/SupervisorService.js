import request from '../utils/request';


/**
 *
 * 登陆
 *
 * you can login with supervisor_id
 *
 * param:{
 *      supervisor_id: int
 *      password: string
 * }
 *
 */
export async function login(param) {

  const formData = new FormData();
  formData.append('supervisor_id', param.supervisor_id);
  formData.append('password', param.password);

  return request('/supervisor/login', {
    method: 'POST',
    body: formData
  })

}

/**
 *
 * 获取所有机构注册申请
 *
 * @param param
 * @returns {Promise.<Object>}
 */
export async function getAllRegisterApply() {

  return request('/supervisor/getAllRegisterApply', {
    method: 'GET',
  })

}

/**
 *
 * 获取所有机构修改信息申请
 *
 * @returns {Promise.<Object>}
 */
export async function getAllModifyApply() {

  return request('/supervisor/getAllModifyApply', {
    method: 'GET',
  })

}

/**
 *
 * 批准机构注册或修改信息申请
 *
 * @param param
 * @returns {Promise.<Object>}
 */
export async function approveApply(param) {

  const formData = new FormData();
  formData.append('institution_apply_id', param.institution_apply_id);

  return request('/supervisor/approveApply', {
    method: 'POST',
    body: formData
  })

}

/**
 *
 * 驳回机构注册或修改信息申请
 *
 * @param param
 * @returns {Promise.<Object>}
 */
export async function rejectApply(param) {

  const formData = new FormData();
  formData.append('institution_apply_id', param.institution_apply_id);

  return request('/supervisor/rejectApply', {
    method: 'POST',
    body: formData
  })

}

/**
 *
 * 发送管理员处理结果邮件
 *
 * @param param
 * @returns {Promise.<Object>}
 */
export async function sendReplyMail(param) {

  const formData = new FormData();
  formData.append('to', param.to);
  formData.append('title', param.title);
  formData.append('content', param.content);

  return request('/supervisor/sendReplyMail', {
    method: 'POST',
    body: formData
  })

}

/**
 * 获取所有已注册机构信息
 *
 * @returns {Promise.<Object>}
 */
export async function getAllInstitutionsInfo() {

  return request('/supervisor/getAllInstitutionsInfo', {
    method: 'GET',
  })

}

/**
 * 获取所有要结算钱款的机构列表
 *
 * @returns {Promise.<Object>}
 */
export async function getToSettleList() {

  return request('/supervisor/getToSettleList', {
    method: 'GET',
  })

}

/**
 * 结算各机构应得钱款
 *
 * @param param
 * @returns {Promise.<Object>}
 */
export async function settlePayment(param) {

  const formData = new FormData();
  formData.append('institutionID', param.institutionID);
  formData.append('course_earning', param.course_earning);

  return request('/supervisor/settlePayment', {
    method: 'POST',
    body: formData
  })

}

/**
 * 获取若水教育每月收入数据
 *
 * @returns {Promise.<Object>}
 */
export async function getStatisticsForBarChart() {

  return request('/supervisor/getStatisticsForBarChart', {
    method: 'GET',
  })

}

/**
 * 获取本年收入来源占比饼图数据
 *
 * @returns {Promise.<Object>}
 */
export async function getStatisticsForPieChart() {

  return request('/supervisor/getStatisticsForPieChart', {
    method: 'GET',
  })

}

/**
 * 获取所有机构统计数据
 *
 * @returns {Promise.<Object>}
 */
export async function getInstitutionStatistics() {

  return request('/supervisor/getInstitutionStatistics', {
    method: 'GET',
  })

}

/**
 * 获取所有会员统计数据
 *
 * @returns {Promise.<Object>}
 */
export async function getTraineeStatistics() {

  return request('/supervisor/getTraineeStatistics', {
    method: 'GET',
  })

}
