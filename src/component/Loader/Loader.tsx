//import { classNames } from 'shared/lib/classNames/classNames';
import "./Loader.scss";

interface LoaderProps {
    className?: string;
}

export const Loader = ({ className }: LoaderProps) => (
   /*  <div className="wrapper"> */
        <div className="lds-ellipsis">
            <div />
            <div />
            <div />
            <div />
        </div>
    /* </div> */
);
