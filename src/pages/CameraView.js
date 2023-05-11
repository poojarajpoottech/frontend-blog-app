import { useEffect, useRef } from 'react';

export default function CameraView() {
  const videoRef = useRef(null);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <video ref={videoRef}>
      <track src="path/to/caption/file.vtt" kind="captions" label="English" default />
    </video>
  );
}
