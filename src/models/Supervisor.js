import pathToRegexp from 'path-to-regexp';
import {message} from 'antd';
import {
  login,
  getAllRegisterApply,
  getAllModifyApply,
  approveApply,
  rejectApply,
  sendReplyMail,
  getAllInstitutionsInfo,
  getToSettleList,
  settlePayment,
  getStatisticsForBarChart,
  getStatisticsForPieChart,
  getInstitutionStatistics,
  getTraineeStatistics,
} from "../services/SupervisorService";


export default {

  namespace: 'supervisor',

  state: {
    supervisor_id: null,
    hasLoggedIn: false,
    registerApplyData: [],
    institutions_info: [],
    toSettleList: [],
    bar_chart_statistics: [],
    pie_chart_statistics: [],
    institution_statistics: [],
    trainee_statistics: [],
    selectedKey: 4
  },

  subscriptions: {
    setup({dispatch, history}) {
      history.listen((location) => {
        if (pathToRegexp('/homepage').exec(location.pathname) || pathToRegexp('').exec(location.pathname)) {
          document.title = '主页';
        }
        else if (pathToRegexp('/InstitutionRegister').exec(location.pathname)) {
          document.title = '机构-注册';
        }
        else if (pathToRegexp('/InstitutionLogin').exec(location.pathname)) {
          document.title = '机构-登陆';
        }
        else if (pathToRegexp('/Institution/ReleaseCourse').exec(location.pathname)) {
          document.title = '机构-课程发布';
        }
        else if (pathToRegexp('/Institution/DivideClass').exec(location.pathname)) {
          document.title = '机构-分配班级';
        }
        else if (pathToRegexp('/Institution/CourseRegistration').exec(location.pathname)) {
          document.title = '机构-听课登记';
        }
        else if (pathToRegexp('/Institution/ScoresRegistration').exec(location.pathname)) {
          document.title = '机构-成绩登记';
        }
        else if (pathToRegexp('/Institution/ConfirmPayment').exec(location.pathname)) {
          document.title = '机构-缴费确认';
        }
        else if (pathToRegexp('/Institution/CourseInfo').exec(location.pathname)) {
          document.title = '机构-查看课程';
        }
        else if (pathToRegexp('/Institution/BookedCourses').exec(location.pathname)) {
          document.title = '机构-订课信息';
        }
        else if (pathToRegexp('/Institution/UnsubscribeCourses').exec(location.pathname)) {
          document.title = '机构-退课信息';
        }
        else if (pathToRegexp('/Institution/EarningStatistics').exec(location.pathname)) {
          document.title = '机构-财务信息';
        }
        else if (pathToRegexp('/Institution/EditInfo').exec(location.pathname)) {
          document.title = '机构-修改信息';
        }
        else if (pathToRegexp('/TraineeRegister').exec(location.pathname)) {
          document.title = '学员-注册';
        }
        else if (pathToRegexp('/TraineeLogin').exec(location.pathname)) {
          document.title = '学员-登陆';
        }
        else if (pathToRegexp('/Trainee/ChooseCourseWithClass').exec(location.pathname)) {
          document.title = '学员-预定课程(选班)';
        }
        else if (pathToRegexp('/Trainee/ChooseCourseWithoutClass').exec(location.pathname)) {
          document.title = '学员-预定课程(不选班)';
        }
        else if (pathToRegexp('/Trainee/NotPaidOrders').exec(location.pathname)) {
          document.title = '学员-未支付订单';
        }
        else if (pathToRegexp('/Trainee/PaidOrders').exec(location.pathname)) {
          document.title = '学员-已支付订单';
        }
        else if (pathToRegexp('/Trainee/UnsubscribeOrders').exec(location.pathname)) {
          document.title = '学员-已退课订单';
        }
        else if (pathToRegexp('/Trainee/CourseRegistration').exec(location.pathname)) {
          document.title = '学员-听课记录';
        }
        else if (pathToRegexp('/Trainee/Scores').exec(location.pathname)) {
          document.title = '学员-个人成绩';
        }
        else if (pathToRegexp('/Trainee/ConsumptionStatistics').exec(location.pathname)) {
          document.title = '学员-消费统计';
        }
        else if (pathToRegexp('/Trainee/VipCenter').exec(location.pathname)) {
          document.title = '学员-会员中心';
        }
        else if (pathToRegexp('/Trainee/EditInfo').exec(location.pathname)) {
          document.title = '学员-修改信息';
        }
        else if (pathToRegexp('/SupervisorLogin').exec(location.pathname)) {
          document.title = '管理员-登陆';
        }
        else if (pathToRegexp('/Supervisor/CheckRegister').exec(location.pathname)) {
          document.title = '管理员-机构注册审核';
        }
        else if (pathToRegexp('/Supervisor/CheckModify').exec(location.pathname)) {
          document.title = '管理员-修改信息审核';
        }
        else if (pathToRegexp('/Supervisor/InstitutionsInfo').exec(location.pathname)) {
          document.title = '管理员-已注册机构';
        }
        else if (pathToRegexp('/Supervisor/SettlePayment').exec(location.pathname)) {
          document.title = '管理员-金额结算';
        }
        else if (pathToRegexp('/Supervisor/EarningStatistics').exec(location.pathname)) {
          document.title = '管理员-若水财务';
        }
        else if (pathToRegexp('/Supervisor/InstitutionStatistics').exec(location.pathname)) {
          document.title = '管理员-机构数据';
        }
        else if (pathToRegexp('/Supervisor/TraineeStatistics').exec(location.pathname)) {
          document.title = '管理员-学员数据';
        }
        else {
          document.title = '页面不存在';
        }
      });

      const hasSupervisorLoggedIn = sessionStorage.getItem("hasSupervisorLoggedIn");
      const supervisor_id = sessionStorage.getItem('supervisor_id');
      const hasLoggedIn = sessionStorage.getItem('hasLoggedIn');

      if (hasSupervisorLoggedIn && hasSupervisorLoggedIn !== undefined) {
        dispatch({
          type: 'updateHasLoggedIn',
          payload: {hasLoggedIn: hasSupervisorLoggedIn},
        });
      }
      if (supervisor_id && supervisor_id !== undefined) {
        dispatch({
          type: 'updateSupervisorId',
          payload: {supervisor_id: supervisor_id},
        });
      }

      if (hasLoggedIn !== undefined) {
        dispatch({
          type: 'updateHasLoggedIn',
          payload: {hasLoggedIn: hasLoggedIn}
        })
      }

    },
  },

  effects: {

    // 登陆
    * login({payload}, {call, put, select}) {
      const data = yield call(login, payload);
      if (data.successTag) {
        sessionStorage.setItem('hasSupervisorLoggedIn', true);
        sessionStorage.setItem('supervisor_id', data.t.supervisor_id);
        sessionStorage.setItem('hasLoggedIn', true);

        yield put({
          type: 'updateSupervisorId',
          payload: {supervisor_id: data.t.supervisor_id}
        });

        yield put({
          type: 'updateHasLoggedIn',
          payload: {hasLoggedIn: true}
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
      sessionStorage.setItem('hasSupervisorLoggedIn', false);
      yield put({
        type: 'updateHasLoggedIn',
        payload: {hasLoggedIn: false}
      });
      message.success("已退出登录！");
    },

    // 获取所有机构注册申请
    * getAllRegisterApply({payload}, {call, put, select}) {
      const data = yield call(getAllRegisterApply);

      let applies = [];
      if (data.t !== null) {
        for (let i = 0; i < data.t.length; i++) {
          applies.push({
            key: i,
            institution_apply_id: data.t[i].institution_apply_id,
            name: data.t[i].name,
            email: data.t[i].email,
            address: data.t[i].location,
            faculty: data.t[i].faculty,
            introduction: data.t[i].introduction,
          });
        }
      }

      yield put({
        type: 'updateRegisterApplyData',
        payload: {registerApplyData: applies}
      });
    },

    // 获取所有机构修改信息申请
    * getAllModifyApply({payload}, {call, put, select}) {
      const data = yield call(getAllModifyApply);

      let applies = [];
      if (data.t !== null) {
        for (let i = 0; i < data.t.length; i++) {
          applies.push({
            key: i,
            institution_apply_id: data.t[i].institution_apply_id,
            name: data.t[i].name,
            email: data.t[i].email,
            address: data.t[i].location,
            faculty: data.t[i].faculty,
            introduction: data.t[i].introduction,
          });
        }
      }

      yield put({
        type: 'updateModifyApplyData',
        payload: {modifyApplyData: applies}
      });
    },

    // 批准申请
    * approveApply({payload}, {call, put, select}) {

      const data = yield call(approveApply, payload.approve);
      if (data.successTag) {
        message.success(data.message);

        // 发送处理结果邮件
        if (payload.type === "approveRegister") {
          // 直接在param中写data.t.code好像会报错导致邮件无法发送
          // 改成这样就好了
          const code = data.t.code;
          const param = {
            to: payload.email.to,
            title: "机构注册成功提醒",
            content: "尊敬的" + payload.email.name +
            "，恭喜您成功注册\"若水\"教育。您的机构登陆码为：" + code + "。请您务必妥善保管。"
          };
          yield call(sendReplyMail, param);
        }
        else {
          const param = {
            to: payload.email.to,
            title: "机构修改信息成功提醒",
            content: "尊敬的" + payload.email.name +
            "，您已成功修改贵机构信息。"
          };
          yield call(sendReplyMail, param);
        }
      }
      else {
        message.error(data.message);
      }
    },

    // 驳回申请
    * rejectApply({payload}, {call, put, select}) {
      const data = yield call(rejectApply, payload.reject);
      if (data.successTag) {
        message.success(data.message);
        // 发送处理结果邮件
        if (payload.type === "rejectRegister") {
          const param = {
            to: payload.email.to,
            title: "机构注册失败提醒",
            content: "尊敬的" + payload.email.name +
            "，我们很抱歉地通知您，贵机构未能成功注册\"若水\"教育。详情请致电我们的客服：012-3456-7878。"
          };
          yield call(sendReplyMail, param);
        }
        else {
          const param = {
            to: payload.email.to,
            title: "机构修改信息失败提醒",
            content: "尊敬的" + payload.email.name +
            "，我们很抱歉地通知您，您未能修改贵机构信息。详情请致电我们的客服：012-3456-7878。"
          };
          yield call(sendReplyMail, param);
        }
      }
      else {
        message.error(data.message);
      }
    },

    // 获取所有已注册机构信息
    * getInstitutionsInfo({payload}, {call, put, select}) {
      const data = yield call(getAllInstitutionsInfo);
      if (data.successTag) {
        let institutions_info = [];
        if (data.t !== null) {
          for (let i = 0; i < data.t.length; i++) {
            institutions_info.push({
              key: i,
              name: data.t[i].name,
              email: data.t[i].email,
              address: data.t[i].location,
              faculty: data.t[i].faculty,
              introduction: data.t[i].introduction,
            });
          }
        }

        yield put({
          type: 'updateInstitutionsInfo',
          payload: {institutions_info: institutions_info}
        });
      }
      else {
        message.warning(data.message);
      }
    },

    // 获取待支付金额的机构列表
    * getToSettleList({payload}, {call, put, select}) {
      const data = yield call(getToSettleList);
      if (data.successTag) {
        let toSettleList = [];
        if (data.t !== null) {
          for (let i = 0; i < data.t.length; i++) {
            toSettleList.push({
              key: i,
              institutionID: data.t[i].institutionID,
              institutionName: data.t[i].institutionName,
              institution_earning: data.t[i].institution_earning,
              course_earning: data.t[i].course_earning,
              actual_earning: data.t[i].actual_earning,
            });
          }
        }

        yield put({
          type: 'updateToSettleList',
          payload: {toSettleList: toSettleList}
        });
      }
      else {
        message.warning(data.message);
      }
    },

    // 结算各机构应得钱款
    * settlePayment({payload}, {call, put, select}) {
      const data = yield call(settlePayment, payload);
      if (data.successTag) {
        message.success(data.message);
      }
      else {
        message.error(data.message);
      }
    },

    // 获取若水教育每月收入数据
    * getStatisticsForBarChart({payload}, {call, put, select}) {
      const data = yield call(getStatisticsForBarChart);
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
    },

    // 获取本年收入来源占比饼图数据
    * getStatisticsForPieChart({payload}, {call, put, select}) {
      const data = yield call(getStatisticsForPieChart);
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
    },

    // 获取所有机构统计数据
    * getInstitutionStatistics({payload}, {call, put, select}) {
      const data = yield call(getInstitutionStatistics);
      if (data.successTag) {
        let institution_statistics = [];

        if (data.t !== null) {
          for (let i = 0; i < data.t.length; i++) {
            institution_statistics.push({
              key: i,
              institutionName: data.t[i].institutionName,
              total_earning: data.t[i].total_earning,
              this_year_earning: data.t[i].this_year_earning,
              total_course_amount: data.t[i].total_course_amount,
              this_year_paid_amount: data.t[i].this_year_paid_amount,
              this_year_unsubscribe_amount: data.t[i].this_year_unsubscribe_amount,
            });
          }
        }

        yield put({
          type: 'updateInstitutionStatistics',
          payload: {institution_statistics: institution_statistics}
        });
      }
      else {
        message.warning(data.message);
      }
    },

    // 获取所有会员统计数据
    * getTraineeStatistics({payload}, {call, put, select}) {
      const data = yield call(getTraineeStatistics);
      if (data.successTag) {
        let trainee_statistics = [];
        if (data.t !== null) {
          for (let i = 0; i < data.t.length; i++) {
            trainee_statistics.push({
              key: i,
              traineeName: data.t[i].traineeName,
              email: data.t[i].email,
              total_expense: data.t[i].total_expense,
              this_year_expense: data.t[i].this_year_expense,
              total_course_amount: data.t[i].total_course_amount,
              this_year_paid_amount: data.t[i].this_year_paid_amount,
              this_year_unsubscribe_amount: data.t[i].this_year_unsubscribe_amount,
              level: data.t[i].level,
              credit: data.t[i].credit,
              is_active: data.t[i].is_active ? "未注销" : "已注销",
            });
          }
        }

        yield put({
          type: 'updateTraineeStatistics',
          payload: {trainee_statistics: trainee_statistics}
        });
      }
      else {
        message.warning(data.message);
      }
    },

    // 更改管理者主面板选中的menuItem的key值
    * changeSelectedKey({payload}, {call, put, select}) {
      yield put({
        type: 'updateSelectedKey',
        payload: {selectedKey: payload.selectedKey}
      });
    },

  },

  reducers: {
    // 更新管理者ID
    updateSupervisorId(state, action) {
      return {
        ...state,
        supervisor_id: action.payload.supervisor_id,
      }
    },
    // 更新是否已经登陆的标志
    updateHasLoggedIn(state, action) {
      return {
        ...state,
        hasLoggedIn: action.payload.hasLoggedIn,
      }
    },
    // 更新申请注册的机构列表
    updateRegisterApplyData(state, action) {
      return {
        ...state,
        registerApplyData: action.payload.registerApplyData,
      }
    },
    // 更新申请修改信息的机构列表
    updateModifyApplyData(state, action) {
      return {
        ...state,
        modifyApplyData: action.payload.modifyApplyData,
      }
    },
    // 更新已注册机构列表
    updateInstitutionsInfo(state, action) {
      return {
        ...state,
        institutions_info: action.payload.institutions_info,
      }
    },
    // 更新待支付金额的机构列表
    updateToSettleList(state, action) {
      return {
        ...state,
        toSettleList: action.payload.toSettleList,
      }
    },
    // 更新若水教育每月收入数据
    updateStatisticsForBarChart(state, action) {
      return {
        ...state,
        bar_chart_statistics: action.payload.bar_chart_statistics,
      }
    },
    // 更新本年收入来源占比饼图数据
    updateStatisticsForPieChart(state, action) {
      return {
        ...state,
        pie_chart_statistics: action.payload.pie_chart_statistics,
      }
    },
    // 更新所有机构统计数据
    updateInstitutionStatistics(state, action) {
      return {
        ...state,
        institution_statistics: action.payload.institution_statistics,
      }
    },
    // 更新所有会员统计数据
    updateTraineeStatistics(state, action) {
      return {
        ...state,
        trainee_statistics: action.payload.trainee_statistics,
      }
    },
    // 更新机构主面板选中的menuItem的key值
    updateSelectedKey(state, action) {
      return {
        ...state,
        selectedKey: action.payload.selectedKey,
      }
    },
  }

}
