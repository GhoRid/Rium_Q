import {instance} from '..';

// 광고
export const fetchAds = async () => {
  return await instance.get('/api/ad/get');
};

// 상품 리스트
export const fetchProductsList = async () => {
  return await instance.get('/api/products/list');
};

//상품 정보
export const fetchProductInfo = async (productid: number) => {
  return await instance.get(`/api/products/${productid}`);
};

//상품 이미지들
export const fetchProductImages = async (productid: number) => {
  return await instance.get(`/api/products/detailimage/${productid}`);
};

//상품 상세 정보
export const fetchProductDetail = async (productid: number) => {
  return await instance.get(`/api/products/content/${productid}`);
};

// 최근 본 상품
export const fetchRecentProducts = async (recentProductsId: any) => {
  return await instance.get('/api/products/recentproducts', {
    params: {
      ids: recentProductsId,
    },
  });
};

// 찜한 상품
export const fetchLikeProducts = async () => {
  return await instance.get('/api/like/list');
};

export const fetchSearchResult = async (keyword: string) => {
  return await instance.get(`/api/search/${keyword}`);
};

export const fetchPopularPost = async () => {
  return await instance.get('/api/search/popular');
};
