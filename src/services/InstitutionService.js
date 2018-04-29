import request from '../utils/request';


/**
 *
 * 机构注册
 *
 * @param param
 * @returns {Promise.<Object>}
 */
export async function register(param) {

  const formData = new FormData();
  formData.append('email', param.email);
  formData.append('name', param.name);
  formData.append('password', param.password);
  formData.append('location', param.location);
  formData.append('faculty', param.faculty);
  formData.append('introduction', param.introduction);

  return request('/institution/register', {
    method: 'POST',
    body: formData
  })

}

/**
 *
 * 机构登陆方法
 *
 * @param param
 * @returns {Promise.<Object>}
 */
export async function login(param) {

  const formData = new FormData();
  formData.append('code', param.code);
  formData.append('password', param.password);

  return request('/institution/login', {
    method: 'POST',
    body: formData
  })

}

/**
 *
 * 修改机构信息
 *
 * @param param
 * @returns {Promise.<Object>}
 */
export async function editInfo(param) {

  const formData = new FormData();
  formData.append('code', param.code);
  formData.append('email', param.email);
  formData.append('name', param.name);
  formData.append('password_previous', param.password_previous);
  formData.append('password_new', param.password_new);
  formData.append('location', param.location);
  formData.append('faculty', param.faculty);
  formData.append('introduction', param.introduction);

  return request('/institution/editInfo', {
    method: 'POST',
    body: formData
  })

}

/**
 *
 * 发布课程
 *
 * @param param
 * @returns {Promise.<Object>}
 */
export async function releaseCourse(param) {

  const formData = new FormData();
  formData.append('publisher', param.publisher);
  formData.append('publisher_name', param.publisher_name);
  formData.append('name', param.name);
  formData.append('trainee_amount', param.trainee_amount);
  formData.append('periods_per_week', param.periods_per_week);
  formData.append('total_weeks', param.total_weeks);
  formData.append('teacher', param.teacher);
  formData.append('type', param.type);
  formData.append('price', param.price);
  formData.append('start_date', param.start_date);
  formData.append('introduction', param.introduction);
  formData.append('has_classes', param.has_classes);
  formData.append('book_due_date', param.book_due_date);

  return request('/institution/releaseCourse', {
    method: 'POST',
    body: formData
  })

}

/**
 *
 * 获取机构课程信息
 *
 * @param param
 * @returns {Promise.<Object>}
 */
export async function getCourseInfo(param) {

  const formData = new FormData();
  formData.append('publisher', param.publisher);

  return request('/institution/getCourseInfo', {
    method: 'POST',
    body: formData
  })

}

/**
 * 获得订课信息或退课信息
 *
 * @param param
 * @returns {Promise.<Object>}
 */
export async function getAllOrdersByStatus(param) {

  const formData = new FormData();
  formData.append('institutionID', param.institutionID);
  formData.append('status', param.status);

  return request('/institution/getAllOrdersByStatus', {
    method: 'POST',
    body: formData
  })

}

/**
 * 根据会员名字获取会员优惠信息
 *
 * @param param
 * @returns {Promise.<Object>}
 */
export async function getTraineeInfoByName(param) {

  const formData = new FormData();
  formData.append('name', param.name);

  return request('/institution/getTraineeInfoByName', {
    method: 'POST',
    body: formData
  })

}

/**
 * 获取所有该机构学员优惠信息
 *
 * @param param
 * @returns {Promise.<Object>}
 */
export async function getAllTraineeInfo(param) {

  const formData = new FormData();
  formData.append('institutionID', param.institutionID);
  formData.append('status', param.status);

  return request('/institution/getAllTraineeInfo', {
    method: 'POST',
    body: formData
  })

}

/**
 * 听课登记
 *
 * @param param
 * @returns {Promise.<Object>}
 */
export async function courseRegistration(param) {

  const formData = new FormData();
  formData.append('traineeID', param.traineeID);
  formData.append('courseID', param.courseID);
  formData.append('institutionID', param.institutionID);
  formData.append('traineeName', param.traineeName);
  formData.append('courseName', param.courseName);
  formData.append('institutionName', param.institutionName);
  formData.append('registration_date', param.registration_date);

  return request('/institution/courseRegistration', {
    method: 'POST',
    body: formData
  })

}

/**
 * 获取该机构所有听课登记信息
 *
 * @param param
 * @returns {Promise.<Object>}
 */
export async function getAllRegistrationInfo(param) {

  const formData = new FormData();
  formData.append('institutionID', param.institutionID);

  return request('/institution/getAllRegistrationInfo', {
    method: 'POST',
    body: formData
  })

}

/**
 * 获取该机构所有没有登记成绩的学生
 *
 * @param param
 * @returns {Promise.<Object>}
 */
export async function getAllNoScoreTrainees(param) {

  const formData = new FormData();
  formData.append('institutionID', param.institutionID);

  return request('/institution/getAllNoScoreTrainees', {
    method: 'POST',
    body: formData
  })

}

/**
 * 登记成绩
 *
 * @param param
 * @returns {Promise.<Object>}
 */
export async function setScores(param) {

  const formData = new FormData();
  formData.append('course_order_id', param.course_order_id);
  formData.append('traineeID', param.traineeID);
  formData.append('courseID', param.courseID);
  formData.append('institutionID', param.institutionID);
  formData.append('trainee_name', param.trainee_name);
  formData.append('course_name', param.course_name);
  formData.append('institution_name', param.institution_name);
  formData.append('scores', param.scores);

  return request('/institution/setScores', {
    method: 'POST',
    body: formData
  })

}

/**
 * 获取该机构所有学生的登记成绩
 *
 * @param param
 * @returns {Promise.<Object>}
 */
export async function getAllTraineesScores(param) {

  const formData = new FormData();
  formData.append('institutionID', param.institutionID);

  return request('/institution/getAllTraineesScores', {
    method: 'POST',
    body: formData
  })

}

/**
 * 获取机构本年每月课程收入及订课人数数据
 *
 * @param param
 * @returns {Promise.<Object>}
 */
export async function getStatisticsForBarChart(param) {

  const formData = new FormData();
  formData.append('institutionID', param.institutionID);

  return request('/institution/getStatisticsForBarChart', {
    method: 'POST',
    body: formData
  })

}

/**
 * 获取机构本年各类型课程收入占比饼图数据
 *
 * @param param
 * @returns {Promise.<Object>}
 */
export async function getStatisticsForPieChart(param) {

  const formData = new FormData();
  formData.append('institutionID', param.institutionID);

  return request('/institution/getStatisticsForPieChart', {
    method: 'POST',
    body: formData
  })

}

/**
 * 获取机构待分班课程列表
 *
 * @param param
 * @returns {Promise.<Object>}
 */
export async function getToDivideClassList(param) {

  const formData = new FormData();
  formData.append('institutionID', param.institutionID);

  return request('/institution/getToDivideClassList', {
    method: 'POST',
    body: formData
  })

}

/**
 * 分配班级方法
 *
 * @param param
 * @returns {Promise.<Object>}
 */
export async function divideClasses(param) {

  const formData = new FormData();
  formData.append('courseID', param.courseID);
  formData.append('class_amount', param.class_amount);

  return request('/institution/divideClasses', {
    method: 'POST',
    body: formData
  })

}
