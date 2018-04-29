import {message} from 'antd';
import {
  register,
  login,
  editInfo,
  releaseCourse,
  getCourseInfo,
  getAllOrdersByStatus,
  getTraineeInfoByName,
  courseRegistration,
  getAllRegistrationInfo,
  getAllTraineeInfo,
  getAllNoScoreTrainees,
  setScores,
  getAllTraineesScores,
  getStatisticsForBarChart,
  getStatisticsForPieChart,
  getToDivideClassList,
  divideClasses,
} from "../services/InstitutionService";


export default {

  namespace: 'institution',

  state: {
    hasLoggedIn: false,
    institution_id: null,
    institution_code: null,
    institution_email: null,
    institution_name: null,
    institution_location: null,
    institution_faculty: null,
    institution_introduction: null,
    courseData: [],
    booked_courses: [],
    unsubscribeAndFailedOrders: [],
    trainee_discount_info: [],
    trainee_all_discount_info: [],
    registration_list: [],
    no_scores_trainees: [],
    all_trainees_scores: [],
    bar_chart_statistics: [],
    pie_chart_statistics: [],
    line_chart_statistics: [],
    selectedKey: 7,
    toDivideClasses: [],
  },

  subscriptions: {
    setup({dispatch, history}) {
      const hasInstitutionLoggedIn = sessionStorage.getItem("hasInstitutionLoggedIn");
      const institution_id = sessionStorage.getItem('institution_id');
      const institution_code = sessionStorage.getItem('institution_code');
      const institution_email = sessionStorage.getItem('institution_email');
      const institution_name = sessionStorage.getItem('institution_name');
      const institution_location = sessionStorage.getItem('institution_location');
      const institution_faculty = sessionStorage.getItem('institution_faculty');
      const institution_introduction = sessionStorage.getItem('institution_introduction');

      if (hasInstitutionLoggedIn && hasInstitutionLoggedIn !== undefined) {
        dispatch({
          type: 'updateHasLoggedIn',
          payload: {hasLoggedIn: hasInstitutionLoggedIn},
        });
      }
      if (institution_id && institution_id !== undefined) {
        dispatch({
          type: 'updateInstitutionId',
          payload: {institution_id: institution_id},
        });
      }
      if (institution_code && institution_code !== undefined) {
        dispatch({
          type: 'updateInstitutionCode',
          payload: {institution_code: institution_code},
        });
      }
      if (institution_email && institution_email !== undefined) {
        dispatch({
          type: 'updateInstitutionEmail',
          payload: {institution_email: institution_email},
        });
      }
      if (institution_name && institution_name !== undefined) {
        dispatch({
          type: 'updateInstitutionName',
          payload: {institution_name: institution_name},
        });
      }
      if (institution_location && institution_location !== undefined) {
        dispatch({
          type: 'updateInstitutionLocation',
          payload: {institution_location: institution_location},
        });
      }
      if (institution_faculty && institution_faculty !== undefined) {
        dispatch({
          type: 'updateInstitutionFaculty',
          payload: {institution_faculty: institution_faculty},
        });
      }
      if (institution_introduction && institution_introduction !== undefined) {
        dispatch({
          type: 'updateInstitutionIntroduction',
          payload: {institution_introduction: institution_introduction},
        });
      }
    }
  },

  effects: {

    // 机构注册
    * register({payload}, {call, put, select}) {
      const data = yield call(register, payload);
      if (data.successTag) {
        message.success(data.message);
      }
      else {
        message.error(data.message);
      }
    },

    // 机构登陆
    * login({payload}, {call, put, select}) {
      const data = yield call(login, payload);
      if (data.successTag) {
        sessionStorage.setItem('hasInstitutionLoggedIn', true);
        sessionStorage.setItem('institution_id', data.t.institution_id);
        sessionStorage.setItem('institution_code', data.t.code);
        sessionStorage.setItem('institution_email', data.t.email);
        sessionStorage.setItem('institution_name', data.t.name);
        sessionStorage.setItem('institution_location', data.t.location);
        sessionStorage.setItem('institution_faculty', data.t.faculty);
        sessionStorage.setItem('institution_introduction', data.t.introduction);

        yield put({
          type: 'updateHasLoggedIn',
          payload: {hasLoggedIn: true}
        });
        yield put({
          type: 'updateInstitutionId',
          payload: {institution_id: data.t.institution_id}
        });
        yield put({
          type: 'updateInstitutionCode',
          payload: {institution_code: data.t.code}
        });
        yield put({
          type: 'updateInstitutionEmail',
          payload: {institution_email: data.t.email}
        });
        yield put({
          type: 'updateInstitutionName',
          payload: {institution_name: data.t.name}
        });
        yield put({
          type: 'updateInstitutionLocation',
          payload: {institution_location: data.t.location}
        });
        yield put({
          type: 'updateInstitutionFaculty',
          payload: {institution_faculty: data.t.faculty}
        });
        yield put({
          type: 'updateInstitutionIntroduction',
          payload: {institution_introduction: data.t.introduction}
        });
        message.success(data.message);
        return true;
      }
      else {
        message.error(data.message);
        return false;
      }
    },

    // 退出登录
    * logout({payload}, {call, put, select}) {
      sessionStorage.setItem('hasInstitutionLoggedIn', false);
      yield put({
        type: 'updateHasLoggedIn',
        payload: {hasLoggedIn: false}
      });
      message.success("已退出登录！");
    },

    // 机构申请修改信息
    * editInfo({payload}, {call, put, select}) {
      const data = yield call(editInfo, payload);
      if (data.successTag) {
        message.success(data.message);
      }
      else {
        message.error(data.message);
      }
    },

    // 机构发布课程
    * releaseCourse({payload}, {call, put, select}) {
      const data = yield call(releaseCourse, payload);
      if (data.successTag) {
        message.success(data.message);
        return true;
      }
      else {
        message.error(data.message);
        return false;
      }
    },

    // 获取机构课程信息
    * getCourseInfo({payload}, {call, put, select}) {
      const data = yield call(getCourseInfo, payload);
      let courses = [];
      if (data.t !== null) {
        for (let i = 0; i < data.t.length; i++) {
          let class_amount = data.t[i].class_amount;
          if (data.t[i].hasClasses && class_amount === 1) {
            class_amount = "暂未确定";
          }
          courses.push({
            key: i,
            name: data.t[i].name,
            trainee_amount: data.t[i].booked_amount + " / " + data.t[i].trainee_amount,
            periods_per_week: data.t[i].periods_per_week,
            total_weeks: data.t[i].total_weeks,
            type: data.t[i].type,
            start_date: data.t[i].start_date,
            teacher: data.t[i].teacher,
            introduction: data.t[i].introduction,
            price: data.t[i].price,
            class_amount: class_amount,
            book_due_date: data.t[i].due
          });
        }
      }

      yield put({
        type: 'updateInstitutionCourseData',
        payload: {courseData: courses}
      });
    },

    // 获取机构订课信息
    * getAllBookedOrders({payload}, {call, put, select}) {
      const data = yield call(getAllOrdersByStatus, payload);
      let booked_courses = [];
      if (data.t !== null) {
        for (let i = 0; i < data.t.length; i++) {
          booked_courses.push({
            key: i,
            traineeID: data.t[i].traineeID,
            courseID: data.t[i].courseID,
            course_name: data.t[i].course_name,
            trainee_name: data.t[i].trainee_name,
            institution_name: data.t[i].institution_name,
            amount: data.t[i].amount,
            payment: data.t[i].payment,
            book_time: data.t[i].bookTime,
            description: data.t[i].description,
          });
        }
      }

      yield put({
        type: 'updateBookedCourses',
        payload: {booked_courses: booked_courses}
      });
    },

    // 获取机构退课和配班失败订单列表
    * getAllUnsubscribeAndFailedOrders({payload}, {call, put, select}) {
      const data = yield call(getAllOrdersByStatus, payload.unsubscribe);
      const data2 = yield call(getAllOrdersByStatus, payload.failure);
      let unsubscribeAndFailedOrders = [];
      if (data.t !== null) {
        for (let i = 0; i < data.t.length; i++) {
          let status = "";
          if (data.t[i].status === "unsubscribe") {
            status = "已退课";
          }
          unsubscribeAndFailedOrders.push({
            key: i,
            course_name: data.t[i].course_name,
            trainee_name: data.t[i].trainee_name,
            amount: data.t[i].amount,
            payment: data.t[i].payment,
            payback: data.t[i].payback,
            book_time: data.t[i].bookTime,
            unsubscribe_time: data.t[i].unsubscribe_time,
            description: data.t[i].description,
            status: status,
          });
        }
      }

      if (data2.t !== null) {
        for (let i = 0; i < data2.t.length; i++) {
          let status = "";
          if (data2.t[i].status === "failure") {
            status = "配班失败，已全额退款";
          }
          unsubscribeAndFailedOrders.push({
            key: i,
            course_name: data2.t[i].course_name,
            trainee_name: data2.t[i].trainee_name,
            amount: data2.t[i].amount,
            payment: data2.t[i].payment,
            payback: data2.t[i].payback,
            book_time: data2.t[i].bookTime,
            unsubscribe_time: data2.t[i].unsubscribe_time,
            description: data2.t[i].description,
            status: status,
          });
        }
      }

      yield put({
        type: 'updateUnsubscribeAndFailedOrders',
        payload: {unsubscribeAndFailedOrders: unsubscribeAndFailedOrders}
      });
    },

    // 获取学员优惠信息
    * getTraineeInfoByName({payload}, {call, put, select}) {
      const data = yield call(getTraineeInfoByName, payload);
      if (data.successTag) {
        let trainee_discount_info = [];
        if (data.t !== null) {
          for (let i = 0; i < data.t.length; i++) {
            trainee_discount_info.push({
              key: i,
              trainee_name: data.t[i].name,
              email: data.t[i].email,
              level: data.t[i].level + "级",
              discount: data.t[i].discount === 1 ? "暂无可使用优惠折扣" : data.t[i].discount + "折"
            });
          }
        }

        yield put({
          type: 'updateTraineeDiscountInfo',
          payload: {trainee_discount_info: trainee_discount_info}
        });
      }
      else {
        message.error(data.message);
      }
    },

    // 获取所有该机构学员优惠信息
    * getAllTraineeInfo({payload}, {call, put, select}) {
      const data = yield call(getAllTraineeInfo, payload);
      if (data.successTag) {
        let trainee_all_discount_info = [];
        if (data.t !== null) {
          for (let i = 0; i < data.t.length; i++) {
            trainee_all_discount_info.push({
              key: i,
              trainee_name: data.t[i].name,
              email: data.t[i].email,
              level: data.t[i].level + "级",
              discount: data.t[i].discount === 1 ? "暂无可使用优惠折扣" : data.t[i].discount + "折"
            });
          }
        }

        yield put({
          type: 'updateAllTraineeDiscountInfo',
          payload: {trainee_all_discount_info: trainee_all_discount_info}
        });
      }
      else {
        message.warning(data.message);
      }
    },

    // 听课登记
    * courseRegistration({payload}, {call, put, select}) {
      const data = yield call(courseRegistration, payload);
      if (data.successTag) {
        message.success(data.message);
        return true;
      }
      else {
        message.error(data.message);
        return false;
      }
    },

    // 获取该机构所有听课登记信息
    * getAllRegistrationInfo({payload}, {call, put, select}) {
      const data = yield call(getAllRegistrationInfo, payload);
      if (data.successTag) {
        let registration_list = [];
        if (data.t !== null) {
          for (let i = 0; i < data.t.length; i++) {
            registration_list.push({
              key: i,
              trainee_name2: data.t[i].trainee_name,
              course_name2: data.t[i].course_name,
              registration_date: new Date(parseInt(data.t[i].registration_date, 10)).toLocaleString(),
            });
          }
        }

        yield put({
          type: 'updateRegistrationList',
          payload: {registration_list: registration_list}
        });
      }
      else {
        message.error(data.message);
      }
    },

    // 获取该机构所有没有登记成绩的学生
    * getAllNoScoresTrainees({payload}, {call, put, select}) {
      const data = yield call(getAllNoScoreTrainees, payload);
      if (data.successTag) {
        let no_scores_trainees = [];
        if (data.t !== null) {
          for (let i = 0; i < data.t.length; i++) {
            no_scores_trainees.push({
              key: i,
              trainee_name: data.t[i].trainee_name,
              course_name: data.t[i].course_name,
              institution_name: data.t[i].institution_name,
              traineeID: data.t[i].traineeID,
              courseID: data.t[i].courseID,
              course_order_id: data.t[i].course_order_id,
            });
          }
        }

        yield put({
          type: 'updateNoScoresTrainees',
          payload: {no_scores_trainees: no_scores_trainees}
        });
      }
      else {
        message.warning(data.message);
      }
    },

    // 机构登记成绩
    * setScores({payload}, {call, put, select}) {
      const data = yield call(setScores, payload);
      if (data.successTag) {
        message.success(data.message);
        return true;
      }
      else {
        message.error(data.message);
        return false;
      }
    },

    // 获取该机构所有学生的登记成绩
    * getAllTraineesScores({payload}, {call, put, select}) {
      const data = yield call(getAllTraineesScores, payload);
      if (data.successTag) {
        let all_trainees_scores = [];
        if (data.t !== null) {
          for (let i = 0; i < data.t.length; i++) {
            all_trainees_scores.push({
              key: i,
              trainee_name2: data.t[i].trainee_name,
              course_name2: data.t[i].course_name,
              scores: data.t[i].scores,
            });
          }
        }

        yield put({
          type: 'updateAllTraineesScores',
          payload: {all_trainees_scores: all_trainees_scores}
        });
      }
      else {
        message.warning(data.message);
      }
    },

    // 获取机构本年每月课程收入及订课人数数据
    * getStatisticsForBarAndLineChart({payload}, {call, put, select}) {
      const data = yield call(getStatisticsForBarChart, payload);
      let bar_chart_statistics = [];
      if (data.t !== null) {
        for (let i = 0; i < data.t.length; i++) {
          bar_chart_statistics.push({
            name: data.t[i][0],
            value: data.t[i][1],
          });
        }
      }

      yield put({
        type: 'updateStatisticsForBarChart',
        payload: {bar_chart_statistics: bar_chart_statistics}
      });

      let line_chart_statistics = [];
      if (data.t !== null) {
        for (let i = 0; i < data.t.length; i++) {
          line_chart_statistics.push({
            name: data.t[i][0],
            value: data.t[i][2],
          });
        }
      }

      yield put({
        type: 'updateStatisticsForLineChart',
        payload: {line_chart_statistics: line_chart_statistics}
      });
    },

    // 获取机构本年各类型课程收入占比饼图数据
    * getStatisticsForPieChart({payload}, {call, put, select}) {
      const data = yield call(getStatisticsForPieChart, payload);
      let pie_chart_statistics = [];
      if (data.t !== null) {
        for (let i = 0; i < data.t.length; i++) {
          pie_chart_statistics.push({
            name: data.t[i][0],
            value: data.t[i][1],
          });
        }
      }

      yield put({
        type: 'updateStatisticsForPieChart',
        payload: {pie_chart_statistics: pie_chart_statistics}
      });
      return data.t;
    },

    // 更改机构主面板选中的menuItem的key值
    * changeSelectedKey({payload}, {call, put, select}) {
      yield put({
        type: 'updateSelectedKey',
        payload: {selectedKey: payload.selectedKey}
      });
    },

    // 获取机构待分班课程列表
    * getToDivideClassList({payload}, {call, put, select}) {
      const data = yield call(getToDivideClassList, payload);
      if (data.successTag) {
        let toDivideClasses = [];
        if (data.t !== null) {
          for (let i = 0; i < data.t.length; i++) {
            toDivideClasses.push({
              key: i,
              courseID: data.t[i].courseID,
              courseName: data.t[i].courseName,
              trainee_amount: data.t[i].booked_amount + " / " + data.t[i].trainee_amount,
              max_amount: data.t[i].trainee_amount,
              book_due_date: data.t[i].book_due_date,
              start_date: data.t[i].start_date,
              class_amount: data.t[i].class_amount,
              canDivide: data.t[i].canDivide,
            });
          }
        }

        yield put({
          type: 'updateToDivideClasses',
          payload: {toDivideClasses: toDivideClasses}
        });
      }
      else {
        message.warning(data.message);
      }
    },

    // 分配班级
    * divideClasses({payload}, {call, put, select}) {
      const data = yield call(divideClasses, payload);
      if (data.successTag) {
        message.success(data.message);
      }
      else {
        message.error(data.message);
      }
    },

  },

  reducers: {
    // 更新是否已经登陆的标志
    updateHasLoggedIn(state, action) {
      return {
        ...state,
        hasLoggedIn: action.payload.hasLoggedIn,
      }
    },
    // 更新机构ID
    updateInstitutionId(state, action) {
      return {
        ...state,
        institution_id: action.payload.institution_id,
      }
    },
    // 更新机构登陆码
    updateInstitutionCode(state, action) {
      return {
        ...state,
        institution_code: action.payload.institution_code,
      }
    },
    // 更新机构电子邮件
    updateInstitutionEmail(state, action) {
      return {
        ...state,
        institution_email: action.payload.institution_email,
      }
    },
    // 更新机构名称
    updateInstitutionName(state, action) {
      return {
        ...state,
        institution_name: action.payload.institution_name,
      }
    },
    // 更新机构地址
    updateInstitutionLocation(state, action) {
      return {
        ...state,
        institution_location: action.payload.institution_location,
      }
    },
    // 更新机构师资介绍
    updateInstitutionFaculty(state, action) {
      return {
        ...state,
        institution_faculty: action.payload.institution_faculty,
      }
    },
    // 更新机构简介
    updateInstitutionIntroduction(state, action) {
      return {
        ...state,
        institution_introduction: action.payload.institution_introduction,
      }
    },
    // 更新机构课程信息
    updateInstitutionCourseData(state, action) {
      return {
        ...state,
        courseData: action.payload.courseData,
      }
    },
    // 更新机构订课信息
    updateBookedCourses(state, action) {
      return {
        ...state,
        booked_courses: action.payload.booked_courses,
      }
    },
    // 更新机构退课和配班失败订单列表
    updateUnsubscribeAndFailedOrders(state, action) {
      return {
        ...state,
        unsubscribeAndFailedOrders: action.payload.unsubscribeAndFailedOrders,
      }
    },
    // 更新学员优惠信息
    updateTraineeDiscountInfo(state, action) {
      return {
        ...state,
        trainee_discount_info: action.payload.trainee_discount_info,
      }
    },
    // 更新所有学员优惠信息
    updateAllTraineeDiscountInfo(state, action) {
      return {
        ...state,
        trainee_all_discount_info: action.payload.trainee_all_discount_info,
      }
    },
    // 更新机构听课登记表
    updateRegistrationList(state, action) {
      return {
        ...state,
        registration_list: action.payload.registration_list,
      }
    },
    // 更新机构所有没有登记成绩的学生列表
    updateNoScoresTrainees(state, action) {
      return {
        ...state,
        no_scores_trainees: action.payload.no_scores_trainees,
      }
    },
    // 更新机构所有学生的登记成绩
    updateAllTraineesScores(state, action) {
      return {
        ...state,
        all_trainees_scores: action.payload.all_trainees_scores,
      }
    },
    // 更新机构本年每月课程收入数据
    updateStatisticsForBarChart(state, action) {
      return {
        ...state,
        bar_chart_statistics: action.payload.bar_chart_statistics,
      }
    },
    // 更新机构本年每月订课人数数据
    updateStatisticsForLineChart(state, action) {
      return {
        ...state,
        line_chart_statistics: action.payload.line_chart_statistics,
      }
    },
    // 更新机构本年各类型课程收入占比饼图数据
    updateStatisticsForPieChart(state, action) {
      return {
        ...state,
        pie_chart_statistics: action.payload.pie_chart_statistics,
      }
    },
    // 更新机构主面板选中的menuItem的key值
    updateSelectedKey(state, action) {
      return {
        ...state,
        selectedKey: action.payload.selectedKey,
      }
    },
    // 更新机构待分班课程列表
    updateToDivideClasses(state, action) {
      return {
        ...state,
        toDivideClasses: action.payload.toDivideClasses,
      }
    },
  }

}
