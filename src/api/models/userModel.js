const { withDbHelpers, BaseModel } = require("./modelHelpers");

class UserModel extends BaseModel {
  static get tableName() {
    return "user";
  }

  static get relationMappings() {
    // this is in here to prevent circular deps
    const TopicModel = require("./topicModel").Model;
    const ArticleHistoryModel = require("./articleHistoryModel").Model;
    const ArticleModel = require("./articleModel").Model;

    return {
      createdArticle: {
        relation: BaseModel.HasManyRelation,
        modelClass: ArticleModel,
        join: {
          from: `user.id`,
          to: `article.created_by_id`
        }
      },
      modifiedArticle: {
        relation: BaseModel.HasManyRelation,
        modelClass: ArticleModel,
        join: {
          from: `user.id`,
          to: `article.modified_by_id`
        }
      },
      createdTopic: {
        relation: BaseModel.HasManyRelation,
        modelClass: TopicModel,
        join: {
          from: `user.id`,
          to: `topic.created_by_id`
        }
      },
      modifiedTopic: {
        relation: BaseModel.HasManyRelation,
        modelClass: TopicModel,
        join: {
          from: `user.id`,
          to: `topic.modified_by_id`
        }
      },
      createdArticleHistory: {
        relation: BaseModel.HasManyRelation,
        modelClass: ArticleHistoryModel,
        join: {
          from: `user.id`,
          to: `article_history.created_by_id`
        }
      },
      modifiedArticleHistory: {
        relation: BaseModel.HasManyRelation,
        modelClass: ArticleHistoryModel,
        join: {
          from: `user.id`,
          to: `article_history.modified_by_id`
        }
      }
    };
  }
}

module.exports = withDbHelpers(UserModel);