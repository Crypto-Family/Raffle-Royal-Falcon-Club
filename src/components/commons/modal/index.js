import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { start_close_modal, close_modal } from 'src/redux/actions/modalAction';

const animateCSS = (element, animation, prefix = 'animate__') =>
    // We create a Promise and return it
    new Promise((resolve) => {
        const animationName = `${prefix}${animation}`;
        const node = document.querySelector(element);

        if (node === null) return;

        node.classList.add(`${prefix}animated`, animationName);

        // When the animation ends, we clean the classes and resolve the Promise
        function handleAnimationEnd(event) {
            event.stopPropagation();
            node.classList.remove(`${prefix}animated`, animationName);
            resolve('Animation ended');
        }

        node.addEventListener('animationend', handleAnimationEnd, { once: true });
    });

const Modal = (props) => {
    // props
    const { children, isOpen } = props;

    // reducer
    const { currentModal, animation } = useSelector((state) => state.modalReducer);

    const dispatch = useDispatch();

    const closeAfterAnimation = async (_currentModal) => {
        await animateCSS('#____modal', 'bounceOutUp');
        dispatch(close_modal({ modalName: _currentModal }));
    };

    // close modal on esc key press
    useEffect(() => {
        if (!isOpen) return null;
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') dispatch(start_close_modal());
        };

        const handleClick = () => dispatch(start_close_modal());

        const elmnt = document.querySelector('#____modal-bg');

        window.addEventListener('keydown', handleKeyDown);
        elmnt.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            elmnt.removeEventListener('click', handleClick);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen]);

    useEffect(() => {
        if (animation === 'close') {
            if (currentModal === '') return;
            closeAfterAnimation(currentModal);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [animation, currentModal]);

    return isOpen ? (
        <div className="modal is-active">
            <div
                id="____modal-bg"
                className="modal-background has-background-hblack2-o-2 has-bg-blur-2"
                onClick={() => dispatch(start_close_modal())}
            />
            <div id="____modal" className="modal-content px-4 animate__faster animate__animated animate__bounceIn">
                {children}
            </div>
        </div>
    ) : null;
};

export default Modal;
