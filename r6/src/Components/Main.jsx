
import { useContext } from 'react';
import { Store } from '../Store';

export default function Main() {

  const {displayPage} = useContext(Store);

  return (
      <div className="container text-start">
        <div className="row">
          <div className="col mt-5">
            {displayPage}
          </div>

        </div>
      </div>
  );
}
