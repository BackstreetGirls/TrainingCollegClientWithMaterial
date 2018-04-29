import request from '../utils/request';


/**
 *
 * 获取会员状态，即是否已注销
 *
 * @param param
 * @returns {Promise.<Object>}
 */
export async function isActive(param) {

  const formData = new FormData();
  formData.append('trainee_id', param.trainee_id);

  return request('/trainee/isActive', {
    method: 'POST',
    body: formData
  })

}

/**
 *
 * 发送注册验证码
 *
 * @param param
 * @returns {Promise.<Object>}
 */
export async function sendVerificationCode(param) {

  const formData = new FormData();
  formData.append('email', param.email);

  return request('/trainee/sendVerificationCode', {
    method: 'POST',
    body: formData
  })

}


/**
 * 学员注册
 * @param param
 * @returns {Promise.<Object>}
 */
export async function register(param) {

  const formData = new FormData();
  formData.append('email', param.email);
  formData.append('password', param.password);
  formData.append('name', param.name);
  formData.append('verificationCode', param.verificationCode);

  return request('/trainee/register', {
    method: 'POST',
    body: formData
  })

}


/**
 *
 * 学员登陆
 *
 * @param param
 * @returns {Promise.<Object>}
 */
export async function login(param) {

  const formData = new FormData();
  formData.append('email', param.email);
  formData.append('password', param.password);

  return request('/trainee/login', {
    method: 'POST',
    body: formData
  })

}

/**
 *
 * 学员修改信息
 *
 * @param param
 * @returns {Promise.<Object>}
 */
export async function traineeEditInfo(param) {

  const formData = new FormData();
  formData.append('trainee_id', param.trainee_id);
  formData.append('email', param.email);
  formData.append('name', param.name);
  formData.append('password_previous', param.password_previous);
  formData.append('password_new', param.password_new);
  formData.append('expenditure', param.expenditure);
  formData.append('credit', param.credit);
  formData.append('is_active', param.is_active);

  return request('/trainee/traineeEditInfo', {
    method: 'POST',
    body: formData
  })

}

/**
 *
 * 获取会员累计消费，等级，优惠折扣和积分
 *
 * @param param
 * @returns {Promise.<Object>}
 */
export async function getTraineeVipInfo(param) {

  const formData = new FormData();
  formData.append('trainee_id', param.trainee_id);

  return request('/trainee/getTraineeVipInfo', {
    method: 'POST',
    body: formData
  })

}

/**
 *
 * 获取所有机构发布的所有不分班课程
 *
 * @returns {Promise.<Object>}
 */
export async function getAllCourses() {

  return request('/trainee/getAllCourses', {
    method: 'GET',
  })

}

/**
 *
 * 获取所有机构发布的所有分班课程
 *
 * @returns {Promise.<Object>}
 */
export async function getAllCoursesWithClasses() {

  return request('/trainee/getAllCoursesWithClasses', {
    method: 'GET',
  })

}

/**
 * 生成课程订单
 *
 * @param param
 * @returns {Promise.<Object>}
 */
export async function generateOrder(param) {

  const formData = new FormData();
  formData.append('traineeID', param.traineeID);
  formData.append('courseID', param.courseID);
  formData.append('institutionID', param.institutionID);
  formData.append('payment', param.payment);
  formData.append('amount', param.amount);
  formData.append('description', param.description);
  formData.append('use_credit', param.use_credit);

  return request('/trainee/generateOrder', {
    method: 'POST',
    body: formData
  })

}

/**
 * 获取学员所有未支付订单
 *
 * @param param
 * @returns {Promise.<Object>}
 */
export async function getAllOrdersByStatus(param) {

  const formData = new FormData();
  formData.append('traineeID', param.traineeID);
  formData.append('status', param.status);

  return request('/trainee/getAllOrdersByStatus', {
    method: 'POST',
    body: formData
  })

}

/**
 * 付款
 *
 * @param param
 * @returns {Promise.<Object>}
 */
export async function pay(param) {

  const formData = new FormData();
  formData.append('course_order_id', param.course_order_id);
  formData.append('identity', param.identity);
  formData.append('password', param.password);

  return request('/trainee/pay', {
    method: 'POST',
    body: formData
  })

}

/**
 * 取消课程订单
 *
 * @param param
 * @returns {Promise.<Object>}
 */
export async function cancelPay(param) {

  const formData = new FormData();
  formData.append('course_order_id', param.course_order_id);

  return request('/trainee/cancelPay', {
    method: 'POST',
    body: formData
  })

}

/**
 * 用户退课
 *
 * @param param
 * @returns {Promise.<Object>}
 */
export async function unsubscribe(param) {

  const formData = new FormData();
  formData.append('course_order_id', param.course_order_id);

  return request('/trainee/unsubscribe', {
    method: 'POST',
    body: formData
  })

}

/**
 * 积分兑换卡余额方法
 *
 * @param param
 * @returns {Promise.<Object>}
 */
export async function creditsExchange(param) {

  const formData = new FormData();
  formData.append('trainee_id', param.trainee_id);
  formData.append('credits', param.credits);
  formData.append('identity', param.identity);

  return request('/trainee/creditsExchange', {
    method: 'POST',
    body: formData
  })

}

/**
 * 获取学员所有课程成绩
 *
 * @param param
 * @returns {Promise.<Object>}
 */
export async function getAllScores(param) {

  const formData = new FormData();
  formData.append('traineeID', param.trainee_id);

  return request('/trainee/getAllScores', {
    method: 'POST',
    body: formData
  })

}

/**
 * 获取学员所有听课登记记录
 *
 * @param param
 * @returns {Promise.<Object>}
 */
export async function getAllCoursesRegistration(param) {

  const formData = new FormData();
  formData.append('traineeID', param.trainee_id);

  return request('/trainee/getAllCoursesRegistration', {
    method: 'POST',
    body: formData
  })

}

/**
 * 获取学员本年每月消费统计柱状图数据
 *
 * @param param
 * @returns {Promise.<Object>}
 */
export async function getStatisticsForBarChart(param) {

  const formData = new FormData();
  formData.append('traineeID', param.traineeID);

  return request('/trainee/getStatisticsForBarChart', {
    method: 'POST',
    body: formData
  })

}

/**
 * 获取学员本年各类型课程支出占比饼图数据
 *
 * @param param
 * @returns {Promise.<Object>}
 */
export async function getStatisticsForPieChart(param) {

  const formData = new FormData();
  formData.append('traineeID', param.traineeID);

  return request('/trainee/getStatisticsForPieChart', {
    method: 'POST',
    body: formData
  })

}
