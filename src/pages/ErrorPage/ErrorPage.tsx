import s from './ErrorPage.module.css';
import pageNotFound from '../../assets/images/pageNotFound.png';

export const ErrorPage = () => {
    return (
        <div className={s.wrapper}>
            <img src={pageNotFound} alt="not found"/>
            <h1>Page not found</h1>
            <span>Sorry, we can't find what you're looking for</span>
        </div>
    )
}