import mongoose from 'mongoose';
import CommentAttrs from '../interfaces/CommentRequest';

interface CommentDoc extends mongoose.Document {
    postId: string
    content: string;
  }

interface CommentModel extends mongoose.Model<CommentDoc> {
    build(attrs: CommentAttrs): CommentDoc;
  }

const postSchema = new mongoose.Schema(
  {
    postId: {
      type: String,
      required: true
    },
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

postSchema.statics.build = (attrs: CommentAttrs) => {
    return new Comment(attrs);
  };

const Comment = mongoose.model<CommentDoc,CommentModel>('Comment', postSchema);

export { Comment };


