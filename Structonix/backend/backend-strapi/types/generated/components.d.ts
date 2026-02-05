import type { Schema, Struct } from '@strapi/strapi';

export interface ArticlesArticles extends Struct.ComponentSchema {
  collectionName: 'components_articles_articles';
  info: {
    displayName: 'Articles';
    icon: 'arrowDown';
  };
  attributes: {
    Description: Schema.Attribute.Blocks;
    Titile: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'articles.articles': ArticlesArticles;
    }
  }
}
