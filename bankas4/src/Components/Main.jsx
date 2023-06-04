
import { useContext } from 'react';
import { Store } from '../Store';

export default function Main() {

  const {displayPage} = useContext(Store);

  return (
      <>
                  {displayPage}
      </>
  );
}
