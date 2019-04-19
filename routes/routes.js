//이 파일을 변경하면 다른 파일에서도 모두 적용할 수 있다.

// Global

const HOME = "/"; //메인페이지
const JOIN = "/join"; //회원가입 페이지
const LOGIN = "/login"; //로그인 페이지
const LOGOUT = "/logout"; //로그아웃 페이지
const SEARCH = "/search"; //검색 페이지

//Users

const USERS = "/users"; //사용자 페이지
const USER_DETAIL = "/:id"; //사용자 상세페이지
const EDIT_PROFILE = "/edit-profile"; //회원 수정 페이지
const CHANGE_PASSWORD = "/change-password"; // 비밀번호 변경 페이지

// Videos

const VIDEOS = "/videos"; //비디오들 페이지
const UPLOAD = "/upload"; // 비디오 업로드 페이지
const VIDEO_DETAIL = "/:id"; // 비디오 상세 페이지
const EDIT_VIDEO = "/:id/edit" // 비디오 편집 페이지
const DELETE_VIDEO = "/:id/delete"; // 비디오 삭제 페이지

//:id :을 붙이면 변하는 값이라는 것을 명시하는 것이다.

const routes = {
    home: HOME,
    join: JOIN,
    login: LOGIN,
    logout : LOGOUT,
    search: SEARCH,
    users: USERS,
    userDetail: USER_DETAIL,
    editProfile: EDIT_PROFILE,
    changePassword: CHANGE_PASSWORD,
    videos: VIDEOS,
    upload: UPLOAD,
    videoDetail: VIDEO_DETAIL,
    editVideo: EDIT_VIDEO,
    deleteVideo: DELETE_VIDEO
};

export default routes;

