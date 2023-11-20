import { memo } from "react";
import { CommentCard } from "../CommentCard/CommentCard";
import { Comment } from "../../store/comments/types/comment";

import cls from "./CommentList.module.scss";
import classNames from "classnames";

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
    const { className, isLoading, comments } = props;

    if (isLoading) {
        return (
            <div className={classNames("section mb-3", cls.CommentList, {}, [className])}>
                <CommentCard isLoading />
            </div>
        );
    }

    return (
        <div className={classNames("section mb-3", cls.CommentList, {}, [className])}>
            {comments?.length ? (
                comments.map((comment) => (
                    <CommentCard key={comment.id} isLoading={isLoading} className={cls.comment} comment={comment} />
                ))
            ) : (
                <div>{"Комментарии отсутствуют"}</div>
            )}
        </div>
    );
});
