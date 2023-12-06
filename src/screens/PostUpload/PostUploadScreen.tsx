import { SafeAreaView, View, Text, Pressable } from 'react-native'
import React, {useEffect, useState, useRef} from 'react'
import {Camera, CameraPictureOptions, CameraRecordingOptions, CameraType, FlashMode} from 'expo-camera'
import colors from '../../theme/colors'
import styles from './styles'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import BackButton from '../../components/BackButton/BackButton';


const flashModes = [
  FlashMode.off,
  FlashMode.on,
  FlashMode.auto,
  FlashMode.torch
]

const flashModeToIcon = {
  [FlashMode.off]: 'flash-off',
  [FlashMode.on]: 'flash-on',
  [FlashMode.auto]: 'flash-auto',
  [FlashMode.torch]: 'highlight'
}

const PostUploadScreen = () => {
    const [hasPermissions, setHasPermissions] = useState<boolean | null>(null)
    const [cameraType, setCameraType] = useState(CameraType.back)
    const [flash, setFlash] = useState(FlashMode.off)
    const [isCameraReady, setIsCameraReady] = useState(false);
    const [isRecording, setIsRecording] = useState(false);

    const camera = useRef<Camera>(null)

    useEffect(() => {
        const getPermission = async () => {
            const cameraPermission = await Camera.requestCameraPermissionsAsync();
            const microphonePermission = await Camera.requestMicrophonePermissionsAsync();
            setHasPermissions(cameraPermission.status === 'granted' && microphonePermission.status === 'granted') 
        }
        getPermission();
    }, [])


    const flipCamera = () => {
      setCameraType(currentCameraType => currentCameraType === CameraType.back ? CameraType.front : CameraType.back);
    }

    const flipFlash = () => {
      const currentIndex = flashModes.indexOf(flash);
      const nextIndex = currentIndex === flashModes.length - 1 ? 0 : currentIndex + 1
      setFlash(flashModes[nextIndex]);
    }

    const takePicture = async() => {
      if(!isCameraReady || !camera.current) {
        return;
      }
      const options: CameraPictureOptions = {
        quality: 0.5,
        base64: false,
        skipProcessing: true
      }
      const result = camera.current.takePictureAsync(options);
      console.log(result)
    }

    const startRecording = async() => {
      if(!isCameraReady || !camera.current || isRecording) {
        return;
      }
      const options: CameraRecordingOptions = {
        quality: Camera.Constants.VideoQuality['640:480'],
        maxDuration: 60,
        maxFileSize: 10 * 1024 * 1024,
        mute: false,
      }
      setIsRecording(true);
      try{
        const result = await camera.current.recordAsync(options);
        console.log(result)
      }catch(e) {
        console.log(e)
      }
      setIsRecording(false)
    }

    const stopRecording = () => {
      if(isRecording) {
        camera.current?.stopRecording();
        setIsRecording(false);
      }
    }

    if(hasPermissions == null) {
        return <Text style={{color: colors.colors.text}}>Loading...</Text>
    }
    if(hasPermissions == false){
        return <Text style={{color: colors.colors.text}}>No access to the camera</Text>
    }

  // camera ratios: 16:9, 1:1, 4:3

  return (
    <View style={styles.container}>
      {/* <BackButton /> */}
      <Camera style={styles.camera} type={cameraType} ratio="4:3" flashMode={flash} onCameraReady={() => setIsCameraReady(true)} ref={camera}/>
      <View style={[styles.buttonsContainer, {top: 100}]}>
        <MaterialIcons name="close" size={30} color={colors.colors.text} />
        <MaterialIcons name={flashModeToIcon[flash]} size={30} color={colors.colors.text} onPress={flipFlash}/>
        <MaterialIcons name="settings" size={30} color={colors.colors.text} />
      </View>
      <View style={[styles.buttonsContainer, {bottom: 50}]}>
        <MaterialIcons name="photo-library" size={30} color={colors.colors.text} />
       { isCameraReady && 
       <Pressable onPress={takePicture} onLongPress={startRecording} onPressOut={stopRecording}>
        <View style={[styles.circle, {backgroundColor: isRecording ? colors.colors.danger : colors.colors.text}]}></View> 
       </Pressable>
       } 
        <MaterialIcons name="flip-camera-ios" size={30} color={colors.colors.text} onPress={flipCamera} />
      </View>


    </View>
  )
}

export default PostUploadScreen