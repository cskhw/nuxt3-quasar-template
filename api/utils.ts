import api from "./api";

export function getBaseUrl(): string {
  const config = import.meta.env;
  try {
    const mode = config.VITE_MODE;
    const prefix = config.VITE_PREFIX_URL;
    // const subfix = config.VITE_SUBFIX_URL;
    const baseURL = (prefix as string) + mode;
    return baseURL;
  } catch (e) {
    console.log(e);
    console.log(config);
    return "Check environment variables for URL";
  }
}

// 프로필 이미지 가져옴
export async function setProfileImage(stores: any, imageType = "thumbnail") {
  try {
    // 다운로드 링크 요청
    const response = await api.preference.readPresignedUrlOfDetailImage({
      image_type: imageType,
    });

    if (
      response.data.object.presigned_url !== null &&
      response.data.object.presigned_url !== undefined
    ) {
      const downloadResponse = await api.preference.downloadFromPresignedUrl(
        response.data.object.presigned_url
      );

      // 프로필 이미지 데이터 보여주기
      const blob: Blob = downloadResponse.data;
      if (imageType === "thumbnail")
        stores.us.profileThumbnailSrc = window.URL.createObjectURL(blob);
      else stores.us.profileOriginalSrc = window.URL.createObjectURL(blob);
    }
  } catch (e) {
    // 프로필 이미지가 없을 때 패스
    console.error(e);
  }
}
