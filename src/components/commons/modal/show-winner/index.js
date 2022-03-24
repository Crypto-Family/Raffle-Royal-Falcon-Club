import { useDispatch, useSelector } from 'react-redux';

import { close_modal } from 'src/redux/actions/modalAction';
import Modal from '../index';

const ShowWinner = () => {
    const { showWinnerModal } = useSelector((state) => state.modalReducer);

    const { data } = showWinnerModal;

    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch(close_modal({ modalName: 'showWinnerModal' }));
    };

    return (
        <Modal isOpen={showWinnerModal.isOpen}>
            <div className="modal-content">
                <div className="modal-card">
                    <div className="modal-card-body has-background-hblack1 ">
                        <div className="columns is-centered">
                            <div className="column is-narrow">
                                <div className="content has-text-centered">
                                    <div className="columns is-centered">
                                        <div className="column is-narrow">
                                            <figure className="image pb-2">
                                                <img
                                                    src="https://bulma.io/images/placeholders/128x128.png"
                                                    className="image is-rounded"
                                                />
                                            </figure>
                                        </div>
                                    </div>
                                    <div className="columns is-centered">
                                        <div className="column is-narrow">
                                            <h1 className="title is-1">Congratulations!</h1>
                                            <h2 className="subtitle is-3 pt-5">0x124513asdnjo214jorqwo132</h2>
                                        </div>
                                    </div>
                                    <button className="button is-rounded " onClick={closeModal} type="button">
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
