import request from './axios.js'

const USER = '/user/';
const USER_SIGNIN = `${USER}signin/`;
const USER_SIGNOUT = `${USER}signout/`;

const CONTACTOR = '/contactor/';
const CONTACTOR_GROUP = `${CONTACTOR}group/`;

const FILE = '/file/';
const FILE_GROUP = `${FILE}group/`;
const FILE_DOWNLOAD = `${FILE}download/`;

const PROJECT = '/project/';
const PROJECT_COPY = `${PROJECT}copy/`;
const PROJECT_EXECUTE = `${PROJECT}execute/`;
const PROJECT_GROUP = `${PROJECT}group/`;


const CASE = '/case/';
const CASE_COMPATIBLE = `${CASE}compatible/`;
const CASE_COPY = `${CASE}copy/`;
const CASE_EXECUTE = `${CASE}execute/`;
const CASE_EXPORT = `${CASE}export/`;
const CASE_IMPORT = `${CASE}import/`;

const RECORD = '/record/';
const RECORD_EXPORT = `${RECORD}export/`;
const RECORD_PAGE = `${RECORD}page/`;

const REPORT = '/report/';
const REPORT_PAGE = `${REPORT}page/`

export default {
    signin: function (param, handler) {
        request.post(USER_SIGNIN, param, handler);
    },
    signout: function (handler) {
        request.post(USER_SIGNOUT, {}, handler);
    },
    /*-------------- 联系人 ---------------*/
    // 分页查询联系人分组
    listContactorGroup: function (params, handler) {
        request.get(CONTACTOR_GROUP, params, handler)
    },
    // 删除联系人分组
    deleteContactGroup: function (id, params, handler) {
        request.delete(`${CONTACTOR_GROUP}${id}/`, handler)
    },
    // 新增联系人分组
    createContactGroup: function (params, handler) {
        request.post(CONTACTOR_GROUP, params, handler)
    },
    // 更新联系人分组
    updateContactGroup: function (id, params, handler) {
        request.put(`${CONTACTOR_GROUP}${id}/`, params, handler)
    },

    listContactor: function (param, handler) {
        request.get(CONTACTOR, param, handler);
    },
    saveContactor: function (param, handler) {
        request.post(CONTACTOR, param, handler);
    },
    updateContactor: function (id, param, handler) {
        request.put(`${CONTACTOR}${id}/`, param, handler);
    },
    /*-------------- 项目分组 ---------------*/
    // 分页查询项目分组
    listProjectGroup: function (params, handler) {
        request.get(PROJECT_GROUP, params, handler)
    },
    // 删除项目分组
    deleteProjectGroup: function (id, params, handler) {
        request.delete(`${PROJECT_GROUP}${id}/`, handler)
    },
    // 新增项目分组
    createProjectGroup: function (params, handler) {
        request.post(PROJECT_GROUP, params, handler)
    },
    // 更新项目分组
    updateProjectGroup: function (id, params, handler) {
        request.put(`${PROJECT_GROUP}${id}/`, params, handler)
    },

    /*-------------- 项目 ---------------*/
    // 分页查询项目
    listProject: function (params, handler) {
        request.get(PROJECT, params, handler)
    },
    // 删除项目
    deleteProject: function (id, params, handler) {
        request.delete(`${PROJECT}${id}/`, handler)
    },
    // 新增项目
    createProject: function (params, handler) {
        request.post(PROJECT, params, handler)
    },
    // 更新项目
    updateProject: function (id, params, handler) {
        request.put(`${PROJECT}${id}/`, params, handler)
    },
    // 查询项目
    getProject: function (id, params, handler) {
        request.get(`${PROJECT}${id}/`, params, handler)
    },

    /*-------------- 用例 ---------------*/
    // 分页查询用例
    listCase: function (params, handler) {
        request.get(CASE, params, handler)
    },
    // // 删除项目
    // deleteProject: function (id, params, handler) {
    //     request.delete(`${PROJECT}${id}/`, handler)
    // },
    // // 新增项目
    // createProject: function (params, handler) {
    //     request.post(PROJECT, params, handler)
    // },
    // // 更新项目
    // updateProject: function (id, params, handler) {
    //     request.put(`${PROJECT}${id}/`, params, handler)
    // },
    // // 查询项目
    // getProject: function (id, params, handler) {
    //     request.get(`${PROJECT}${id}/`, params, handler)
    // },
}
