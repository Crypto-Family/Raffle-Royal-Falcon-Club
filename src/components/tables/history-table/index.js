/* eslint-disable no-nested-ternary */
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import projects_history_get_request_thunk from 'src/redux/actions/projectsHistoryAction';
import Loader from 'src/components/loader';
import getDate from 'src/components/dateFormatter';
import { open_modal } from 'src/redux/actions/modalAction';
import NoRaffle from 'pages/current-raffle/no-raffle';

const getAddressReduced = (address) => `${address.slice(0, 5)}...${address.slice(-5)}`;

const HistoryTable = () => {
    const { projectsHistoryReducer } = useSelector((state) => state);
    // console.log('🚀 ~ file: index.js ~ line 12 ~ HistoryTable ~ projectsHistoryReducer', projectsHistoryReducer);

    const dispatch = useDispatch();
    const [currentSelected, setCurrentSelected] = useState(0);
    const [userChoice, setUserChoice] = useState(0);

    const splitEvery = (array, length) =>
        array.reduce((result, item, index) => {
            if (index % length === 0) result.push([]);
            result[Math.floor(index / length)].push(item);

            return result;
        }, []);

    useEffect(() => {
        dispatch(
            projects_history_get_request_thunk({
                requestName: 'projectsHistory',
            })
        );
    }, [dispatch]);

    const objectToArray = (obj) => {
        Object.Entries = () => Object.keys(obj).map((key) => [key, obj[key]]);
        return Object.Entries(obj);
    };

    return projectsHistoryReducer.projectsHistory.success ? (
        <>
            <div className="container">
                <div className="columns is-centered">
                    <div className="column is-narrow">
                        <div className="field has-addons has-font-bioRhyme is-justify-content-center pb-6">
                            <div className="control is-expanded has-icons-left">
                                <span className="select is-fullwidth">
                                    <select
                                        className="has-font-bioRhyme"
                                        onChange={(e) => {
                                            setCurrentSelected(e.target.value);
                                        }}
                                        value={currentSelected}
                                    >
                                        <option disabled>Select Raffle</option>
                                        {projectsHistoryReducer.projectsHistory.data.map((project) => (
                                            <option value={project.id} key={project.id}>
                                                {project.name}
                                            </option>
                                        ))}
                                    </select>
                                </span>
                                <span className="icon is-small is-left">
                                    <i className="fa-solid fa-rectangle-history-circle-user has-text-hblack1" />
                                </span>
                            </div>
                            <div className="control">
                                <button
                                    type="submit"
                                    className="button is-primary has-background-hgold1 has-text-hblack1 has-font-bioRhyme"
                                    onClick={() => {
                                        setUserChoice(currentSelected);
                                        dispatch(
                                            projects_history_get_request_thunk({
                                                requestName: 'projectsHistory',
                                                id: currentSelected,
                                            })
                                        );
                                    }}
                                >
                                    Choose
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <table className="table is-fullwidth is-mobile has-background-hblack1 ">
                <thead>
                    <tr>
                        <th className="has-text-centered" colSpan={7}>
                            <div className="columns is-centered">
                                <div className="column is-narrow">
                                    <div className="content has-text-centered" style={{ width: 'auto' }}>
                                        <p className="has-text-weight-normal has-text-hgold1 has-font-bioRhyme">
                                            {getDate(
                                                projectsHistoryReducer.projectsHistory.data[userChoice].starting_time
                                            )}{' '}
                                            -{' '}
                                            {getDate(
                                                projectsHistoryReducer.projectsHistory.data[userChoice].ending_time
                                            )}
                                        </p>

                                        <figure className="image has-text-centered">
                                            <img
                                                src={
                                                    projectsHistoryReducer.projectsHistory.data[userChoice].raffle_image
                                                }
                                                className=" image is-rounded"
                                            />
                                            <figcaption className="has-text-centered pt-2">
                                                <p className="has-text-hwhite1 has-font-bioRhyme">
                                                    {projectsHistoryReducer.projectsHistory.data[userChoice].name}
                                                </p>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody className="table is-bordered">
                    {splitEvery(projectsHistoryReducer.projectsHistory.data, 7).map((row, i) => (
                        <tr key={i}>
                            {row.map((user, j) => {
                                console.log(
                                    '🚀 ~ file: index.js ~ line 128 ~ HistoryTable ~ projectsHistoryReducer.projectsHistory.data',
                                    objectToArray(projectsHistoryReducer.projectsHistory.data[1])
                                );
                                return (
                                    <td
                                        className="has-text-centered"
                                        key={j}
                                        onClick={() =>
                                            dispatch(
                                                open_modal({
                                                    modalName: 'showWinnerModal',
                                                    modalData: {
                                                        image: user.image,
                                                        address: user.address,
                                                    },
                                                })
                                            )
                                        }
                                    >
                                        <figure className="image is-flex is-justify-content-center pb-2">
                                            <img src={user.image[j]} className="image is-32x32 is-rounded" />
                                        </figure>
                                        <p className="has-text-weight-normal has-text-hwhite1 has-font-bioRhyme">
                                            {getAddressReduced(user.address[j] || '')}
                                        </p>
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    ) : projectsHistoryReducer.projectsHistory.loading ? (
        <div className="has-background-hblack1">
            <Loader />
        </div>
    ) : (
        // display a sorry message that no raffles have been created yet
        <div className="has-background-hblack1">
            <p className="has-text-centered has-text-hwhite1 has-font-bioRhyme is-size-4 pt-6">
                Sorry, no raffles have been created yet.
            </p>
        </div>
    );
};
export default HistoryTable;
