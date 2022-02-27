import { ElLoading } from "element-plus";

let loadingInstance:any;
const showLoading = () => {
  loadingInstance = ElLoading.service({
    fullscreen: true,
    text: "loading...",
    background: "rgba(0,0,0,0.6)",
  });
};

const hideLoading = () => {
  loadingInstance && loadingInstance.close();
};

export { showLoading, hideLoading };
