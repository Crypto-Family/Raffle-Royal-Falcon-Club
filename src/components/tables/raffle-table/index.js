import { useSelector, useDispatch } from 'react-redux';
import active_participants_get_request_thunk from 'src/redux/actions/activeParticipantsAction';
import { useEffect } from 'react';
import Loader from 'src/components/loader';

const getAddressReduced = (address) => `${address.slice(0, 5)}...${address.slice(-5)}`;

const RaffleTable = () => {
    const { activeParticipantsReducer } = useSelector((state) => state);

    const dispatch = useDispatch();

    const splitEvery = (array, length) =>
        array.reduce((result, item, index) => {
            if (index % length === 0) result.push([]);
            result[Math.floor(index / length)].push(item);
            return result;
        }, []);

    useEffect(() => {
        dispatch(
            active_participants_get_request_thunk({
                requestName: 'participatingUsers',
            })
        );
    }, [dispatch]);

    return activeParticipantsReducer.participatingUsers.success ? (
        <table className="table is-fullwidth is-bordered has-background-hblack1">
            <tbody>
                { splitEvery(activeParticipantsReducer.participatingUsers.data, 7).map((row, i) => (
                    <tr key={i}>
                        {row.map((user, j) => {
                            return (
                                <td className="has-text-centered" key={j}>
                                    <figure className="image is-flex is-justify-content-center pb-2">
                                        <img src={user.image} className="image is-32x32 is-rounded" />
                                    </figure>
                                    <p className="has-text-weight-normal has-text-hwhite1 has-font-bioRhyme">
                                        {getAddressReduced(user.address)}
                                    </p>
                                </td>
                            );
                        })}
                    </tr>
                ))}
            </tbody>
        </table>
    ) : (
        <div className="has-background-hblack1" style={{ height: '150vh', width: '100vw' }}>
            <Loader />
        </div>
    );
};
export default RaffleTable;
