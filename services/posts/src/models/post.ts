import mongoose from 'mongoose';
import PostAttrs from '../interfaces/PostRequest';

interface PostDoc extends mongoose.Document {
    content: string;
  }

interface PostModel extends mongoose.Model<PostDoc> {
    build(attrs: PostAttrs): PostDoc;
  }

const postSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true
    }
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      }
    }
  }
);

postSchema.statics.build = (attrs: PostAttrs) => {
    return new Post(attrs);
  };

const Post = mongoose.model<PostDoc,PostModel>('Post', postSchema);

export { Post };


