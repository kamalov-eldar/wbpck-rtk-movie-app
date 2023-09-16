import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import cls from "./AddCommentForm.module.scss";
import classNames from "classnames";
import { Input } from "component/Input/Input";
import Button, { ButtonTheme } from "component/button/Button";
import { useAppDispatch } from "store/hooks/useAppDispatch/useAppDispatch";
import { DynamicModuleLoader, ReducersList } from "component/dynamicModuleLoader/DynamicModuleLoader";
import { addCommentFormActions, addCommentFormReducer } from "store/addCommentForm/slices/addCommentFormSlice";
import { getAddCommentFormError, getAddCommentFormText } from "store/addCommentForm/selectors/addCommentFormSelectors";

export interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo((props: AddCommentFormProps) => {
    const { className, onSendComment } = props;
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);
    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback(
        (value: string) => {
            dispatch(addCommentFormActions.setText(value));
        },
        [dispatch],
    );

    const onSendHandler = useCallback(() => {
        onSendComment(text || "");
        onCommentTextChange("");
    }, [onCommentTextChange, onSendComment, text]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className="comments section mb-3">
                <div className={classNames("", cls.AddCommentForm, {}, [className])}>
                    <Input
                        className={cls.input}
                        placeholder={"Введите текст комментария"}
                        value={text}
                        onChange={onCommentTextChange}
                        field={"comment"}
                    />
                    <Button theme={ButtonTheme.OUTLINE} onClick={onSendHandler}>
                        {"Отправить"}
                    </Button>
                </div>
            </div>
        </DynamicModuleLoader>
    );
});

export default AddCommentForm;