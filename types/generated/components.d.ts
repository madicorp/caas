import type { Schema, Attribute } from '@strapi/strapi';

export interface SocialSocial extends Schema.Component {
  collectionName: 'components_social_socials';
  info: {
    displayName: 'Social';
  };
  attributes: {
    facebook: Attribute.String;
    instagram: Attribute.String;
    linkedin: Attribute.String;
    youtube: Attribute.String;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media<'images' | 'files' | 'videos'>;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface ProjectProject extends Schema.Component {
  collectionName: 'components_project_projects';
  info: {
    displayName: 'Project';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    informations: Attribute.Component<'project.project-info'>;
    gallery: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

export interface ProjectProjectInfo extends Schema.Component {
  collectionName: 'components_project_project_infos';
  info: {
    displayName: 'Project Info';
    icon: 'information';
    description: '';
  };
  attributes: {
    date: Attribute.Date;
    place: Attribute.String;
    client: Attribute.String;
    category: Attribute.Enumeration<
      [
        'Am\u00E9nagements Urbains',
        'Equipements Commerciaux',
        'Equipements Industriels',
        'Equipements Scolaires et de Formation Technique',
        'Logements Individuels',
        'Immeubles multi-fonctionels',
        'Am\u00E9nagements Paysagers et Touristiques',
        'Equipements Sanitaires',
        'Equipements Sportifs',
        'Lieux de culte',
        'Immeuble de bureaux',
        'Am\u00E9nagement int\u00E9rieur',
        'Immeubles d\u2019habitation'
      ]
    >;
    description: Attribute.Text;
  };
}

export interface AboutTeam extends Schema.Component {
  collectionName: 'components_about_teams';
  info: {
    displayName: 'Team Member';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    position: Attribute.String;
    email: Attribute.Email;
    phone: Attribute.String;
    ceo: Attribute.Boolean & Attribute.DefaultTo<false>;
    photo: Attribute.Media<'images'>;
  };
}

export interface AboutPresenting extends Schema.Component {
  collectionName: 'components_about_presentings';
  info: {
    displayName: 'Presenting';
  };
  attributes: {
    mission: Attribute.Text;
    content: Attribute.Blocks;
  };
}

export interface AboutMetric extends Schema.Component {
  collectionName: 'components_metrics_metrics';
  info: {
    displayName: 'Metric';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    icon: Attribute.Media<'images', true>;
    number: Attribute.Integer;
  };
}

export interface AboutDomain extends Schema.Component {
  collectionName: 'components_about_domains';
  info: {
    displayName: 'Domain';
  };
  attributes: {
    name: Attribute.String;
    icon: Attribute.Media<'images'>;
    description: Attribute.Text;
  };
}

export interface AboutAward extends Schema.Component {
  collectionName: 'components_about_awards';
  info: {
    displayName: 'Award';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media<'images'>;
  };
}

export interface AboutApproach extends Schema.Component {
  collectionName: 'components_about_approaches';
  info: {
    displayName: 'Approach';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'social.social': SocialSocial;
      'shared.seo': SharedSeo;
      'shared.meta-social': SharedMetaSocial;
      'project.project': ProjectProject;
      'project.project-info': ProjectProjectInfo;
      'about.team': AboutTeam;
      'about.presenting': AboutPresenting;
      'about.metric': AboutMetric;
      'about.domain': AboutDomain;
      'about.award': AboutAward;
      'about.approach': AboutApproach;
    }
  }
}
