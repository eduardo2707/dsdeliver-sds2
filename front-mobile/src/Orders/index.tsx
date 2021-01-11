import React from 'react';
import { StyleSheet, Text, ScrollView, View, } from 'react-native';
import Header from '../Header';
import OrderdCard from '../OrderCard';

export default function Orders() {

  
  return (
    <>
    <Header />
    <ScrollView style={styles.container}>
      <OrderdCard />
      <OrderdCard />
      <OrderdCard />
      <OrderdCard />
      <OrderdCard />
      <OrderdCard />
    </ScrollView>
    </>
  );
};
  
  const styles = StyleSheet.create({
    container: {
      paddingRight: '5%',
      paddingLeft: '5%',
    }
  });