/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import { useDispatch, useSelector } from 'react-redux';

import { start_close_modal } from 'src/redux/actions/modalAction';
import Modal from '../index';

const ShowWinner = () => {
    const { showWinnerModal } = useSelector((state) => state.modalReducer);

    const { data } = showWinnerModal;

    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch(start_close_modal());
    };

    return (
        <Modal isOpen={showWinnerModal.isOpen}>
            <div className="modal-content">
                <div className="modal-card">
                    <div className="modal-card-body has-background-hblack1 ">
                        <div className="columns is-centered">
                            <div className="column is-narrow">
                                <div className="content has-text-centered">
                                    <div className="columns is-centered bordered-bottom">
                                        <div className="column is-narrow">
                                            <figure className="image pb-2">
                                                <img src={data && data.image} className="image is-rounded" />
                                            </figure>
                                        </div>
                                    </div>
                                    <div className="columns is-centered">
                                        <div className="column is-narrow">
                                            <h1 className="title is-2 has-font-playfairDisplay has-text-hgold1">
                                                Congratulations !
                                            </h1>
                                            <p className="subtitle is-5 pt-5 has-text-hwhite1 has-font-bioRhyme ">
                                                {data && data.address}
                                            </p>
                                        </div>
                                    </div>
                                    <button
                                        className="button is-rounded has-font-bioRhyme has-background-hgold1 is-borderless"
                                        onClick={closeModal}
                                        type="button"
                                    >
                                        Hide Winner
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};
export default ShowWinner;
