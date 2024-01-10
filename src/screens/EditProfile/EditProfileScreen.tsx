import {View, Text, TextInput, Pressable, SafeAreaView} from 'react-native';
import {useForm, Controller, Control} from 'react-hook-form';
import React from 'react';
import colors from '../../theme/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {IUser} from '../../types/models';
import user from '../../assets/data/user.json';
import BackButton from '../../components/BackButton';
import styles from './styles';
import {signOut} from 'aws-amplify/auth';

type IEditableUserField = 'name' | 'username' | 'bio';

type IEditableUser = Pick<IUser, IEditableUserField>;

interface ICustomInput {
  control: Control<IEditableUser, object>;
  label: string;
  name: IEditableUserField;
  multiline?: boolean;
  rules?: object;
}

const CustomInput = ({
  name,
  control,
  label,
  multiline = false,
  rules = {},
}: ICustomInput) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {onChange, value, onBlur}, fieldState: {error}}) => {
        return (
          <View style={styles.inputField}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.textInput}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder="Hello"
                multiline={multiline}
              />
              {error && (
                <Text style={{color: colors.colors.accent, marginTop: 5}}>
                  {' '}
                  {error.message || 'Error'}
                </Text>
              )}
            </View>
          </View>
        );
      }}
    />
  );
};

const EditProfileScreen = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<IEditableUser>({
    defaultValues: {
      name: user.name,
      username: user.username,
      bio: user.bio,
    },
  });
  const onSubmit = (data: IEditableUser) => {
    console.log(data);
  };

  const signOutUser = async () => {
    await signOut();
  };
  return (
    <SafeAreaView>
      <View style={styles.titleContainer}>
        <Text style={styles.screenTitle}>Edit your profile</Text>
        <BackButton />
      </View>
      <View style={styles.container}>
        <View style={styles.form}>
          <CustomInput
            name="name"
            control={control}
            label="Name"
            rules={{
              required: 'Name is required',
              minLength: {
                value: 3,
                message: 'Name should be more than 2 letters',
              },
            }}
          />
          <CustomInput
            name="username"
            control={control}
            label="Username"
            rules={{
              required: 'Username is required',
              minLength: {
                value: 3,
                message: 'Username should be more than 2 letters',
              },
            }}
          />
          <CustomInput
            name="bio"
            control={control}
            label="Bio"
            multiline={true}
            rules={{
              required: 'Bio is required',
              maxLength: {value: 100, message: 'Bio is too long'},
            }}
          />
          <Pressable onPress={handleSubmit(onSubmit)} style={styles.editBtn}>
            <Text style={styles.submit}>Save Changes</Text>
            <AntDesign name="arrowright" size={24} color={colors.colors.text} />
          </Pressable>
        </View>

        <View>
          <Pressable onPress={signOutUser} style={styles.editBtn}>
            <Text style={styles.signOut}>Sign out</Text>
            <Feather name="log-out" size={24} color={colors.colors.danger} />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EditProfileScreen;
