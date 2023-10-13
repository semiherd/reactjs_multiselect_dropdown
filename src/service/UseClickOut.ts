import { RefObject, useEffect } from 'react';

function useClickOut(ref: RefObject<HTMLElement>, onClickOutside: (e: MouseEvent | TouchEvent) => void) {

	const isOutside = (e: MouseEvent | TouchEvent) => {
	  return !!ref.current && !ref.current.contains(e.target as HTMLElement);
	}
 
	const onMouseDown = (e: MouseEvent | TouchEvent) => {
	  if (isOutside(e)) {
		 onClickOutside(e);
	  }
	};
 
	useEffect(
	  () => {
		 document.addEventListener('mousedown', onMouseDown);
		 document.addEventListener('touchstart', onMouseDown);
 
		 return () => {
			document.removeEventListener('mousedown', onMouseDown);
			document.removeEventListener('touchstart', onMouseDown);
		 };
	  }
	), [onClickOutside];
}
export { useClickOut }

/*
useOnClickOutside = (
  ref: RefObject<HTMLElement>,
  cb: (event: MouseEvent) => void,
) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!ref.current) {
        return;
      }

      if (
        event.target instanceof Element &&
        (ref.current.contains(event.target) ||
          !document.body.contains(event.target))
      ) {
        return;
      }

      cb(event);
    };
    document.addEventListener("pointerdown", listener, false);

    return () => {
      document.removeEventListener("pointerdown", listener);
    };
  }, [ref, cb]);
}
*/