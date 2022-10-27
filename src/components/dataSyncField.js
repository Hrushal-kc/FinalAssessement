import React, {useState} from 'react';
import {View, TouchableOpacity, Image, StyleSheet, Text} from 'react-native';
import Modal from 'react-native-modal';
import synclogo from '../../assests/sync_icn.png';
import sync from '../../assests/sync.png';

export const DataSyncField = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleToggle = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View>
      <TouchableOpacity onPress={handleToggle}>
        <Image source={synclogo} />
      </TouchableOpacity>
      <View></View>
      <Modal isVisible={isModalVisible} coverScreen={true}>
        <TouchableOpacity
          style={styles.dataSyncContainer}
          onPress={handleToggle}>
          <View style={styles.imageContainer}>
            <Text style={styles.modalText}>Data Sync in Progress</Text>
            <Text style={styles.modalText}>Please wait</Text>
          </View>
          <Image source={sync} style={styles.dataSyncimage} />
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalText: {
    alignSelf: 'center',
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  dataSyncimage: {
    alignSelf: 'center',
    height: 40,
    width: 42,
  },
  dataSyncContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  imageContainer: {
    marginVertical: 33,
  },
});
