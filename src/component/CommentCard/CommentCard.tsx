import { memo } from "react";
import cls from "./CommentCard.module.scss";
import classNames from "classnames";
import { Skeleton } from "component/Skeleton/Skeleton";
import { Link } from "react-router-dom";
import { RoutePath } from "../../../config/routeConfig/routeConfig";
import { Comment } from "../../store/comments/types/comment";
import { Avatar } from "component/Avatar/Avatar";

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props;

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentCard, {}, [className, cls.loading])}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton height={16} width={100} className={cls.username} />
                </div>
                <Skeleton className={cls.text} width="100%" height={50} />
            </div>
        );
    }

    if (!comment) {
        return null;
    }

    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            <Link to={`${RoutePath.profile}${comment.user.id}`} className={cls.header}>
                {comment.user.avatar ? <Avatar size={30} src={comment.user.avatar} /> : null}
                <div className={cls.username}>{comment.user.username}</div>
            </Link>
            <div className={cls.text}>{comment.text}</div>
        </div>
    );
});
