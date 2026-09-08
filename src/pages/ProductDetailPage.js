import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import ProductPageLayout from '../components/ProductPageLayout';
import { getProductByPath, PRODUCT_LIST } from '../data/products';
import { stripLocalePrefix } from '../i18n/paths';
import { getLocalizedProduct } from '../i18n/localizedContent';
import { useI18n } from '../i18n/I18nProvider';

const ProductDetailPage = () => {
  const { pathname } = useLocation();
  const { t } = useI18n();
  const product = getLocalizedProduct(
    getProductByPath(stripLocalePrefix(pathname)),
    t,
  );

  if (!product) {
    return <Navigate to='/products' replace />;
  }

  const otherProducts = PRODUCT_LIST.filter((item) => item.path !== product.path).map(
    (item) => getLocalizedProduct(item, t),
  );

  return <ProductPageLayout product={product} otherProducts={otherProducts} />;
};

export default ProductDetailPage;
