// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful";

export interface IProducto1Fields {
  /** Producto */
  producto: Asset;
}

/** Yogurt sabor fresa */

export interface IProducto1 extends Entry<IProducto1Fields> {

  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "producto1";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export type CONTENT_TYPE = "producto1";

export type IEntry = IProducto1;

export type LOCALE_CODE = "en-US";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-US";
