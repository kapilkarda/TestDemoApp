import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    Image,
    TouchableOpacity,
    Modal
} from "react-native";
import ScrollPicker from "react-native-wheel-scrollview-picker";


const respHeight = Dimensions.get('window').height;
const respWidth = Dimensions.get('window').width;

const dataSource = ["1", "2", "3", "4", "5", "6"]

const Page1 = ({ navigation, ...props }) => {

    const ref = React.useRef();

    const [modalVisible, setModalVisible] = useState(false);
    const [numberArray, setNumberArray] = useState([]);
    const [index, setIndex] = React.useState(0);

    useEffect(() => {
        let arr = []
        for (let i = 0; i <= 100; i++) {
            arr.push(i);
        }
        setNumberArray(arr);
    }, [])

    const goToNext = () => {
        setModalVisible(false);
        navigation.navigate('Page2')
    }


    return (
        <View style={styles.container}>
            <Text style={styles.titleTextStyle}>Today's Games</Text>
            <View style={{
                height: respHeight / 2 + 30,
                width: respWidth - 40,
                backgroundColor: '#F6F3FA',
                marginTop: respHeight * 0.025,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
            }}>
                <View style={styles.purpleView}>
                    <View style={styles.rowSpace}>
                        <View style={styles.rowCenter}>
                            <Text style={styles.underOverTextStyle}>Under or Over</Text>
                            <Image source={require('../assets/infoIcon.png')} style={styles.infoIconStyle} />
                        </View>
                        <View style={styles.rowCenter}>
                            <Text style={styles.startingTextStyle}>Starting in</Text>
                            <Image source={require('../assets/Clock.png')} style={styles.infoIconStyle} />
                            <Text style={styles.underOverTextStyle}>03:23:12</Text>
                        </View>
                    </View>
                    <Text style={styles.bitcointText1}>
                        Bitcoin price will be under <Text style={styles.bitCoinText2}>$24,524 at 7 a ET on 22nd Jan’21</Text>
                    </Text>
                </View>
                <View style={{ paddingHorizontal: 15, paddingVertical: 20, backgroundColor: '#ffffff' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View>
                            <Text style={styles.headingText}>PRIZE POOL</Text>
                            <Text style={styles.descTextStyle}>$12,000</Text>
                        </View>
                        <View>
                            <Text style={styles.headingText}>UNDER</Text>
                            <Text style={styles.descTextStyle}>3.25x</Text>
                        </View>
                        <View>
                            <Text style={styles.headingText}>OVER</Text>
                            <Text style={styles.descTextStyle}>1.25x</Text>
                        </View>
                        <View>
                            <Text style={styles.headingText}>ENTRY FEES</Text>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'flex-end'
                            }}>
                                <Text style={styles.descTextStyle}>5 </Text>
                                <View style={styles.coinsStyle} />
                            </View>
                        </View>
                    </View>
                    <View style={{ marginTop: respHeight * 0.020 }}>
                        <Text style={styles.whyPredictText}>What’s your prediction?</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TouchableOpacity style={[styles.underBtnStyle, { backgroundColor: "#452C55", }]}>
                                <Image source={require('../assets/downArrow.png')} style={styles.arrowIcon} />
                                <Text style={styles.underTextStyle}>Under</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => setModalVisible(true)}
                                style={[styles.underBtnStyle, { backgroundColor: "#6231AD", }]}>
                                <Image source={require('../assets/upArrow.png')} style={styles.arrowIcon} />
                                <Text style={styles.underTextStyle}>Over</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{ paddingHorizontal: 15, paddingVertical: 15 }}>
                    <View style={styles.rowSpace}>
                        <View style={styles.rowCenter}>
                            <Image source={require('../assets/userIcon.png')} style={{ height: respHeight * 0.04, width: respWidth * 0.04, resizeMode: 'contain', }} />
                            <Text style={{ color: '#727682', marginLeft: 10, fontWeight: '600' }}>355 Players</Text>
                        </View>
                        <View style={styles.rowCenter}>
                            <Image source={require('../assets/chart.png')} style={{ height: respHeight * 0.04, width: respWidth * 0.04, resizeMode: 'contain', }} />
                            <Text style={{ color: '#727682', marginLeft: 10, fontWeight: '600' }}>View chart</Text>
                        </View>
                    </View>
                    <Image source={require('../assets/progressbar.png')} style={{ width: respWidth - 701, height: respHeight * 0.04, resizeMode: 'contain', marginTop: 10 }} />
                    <View style={[styles.rowSpace, { marginTop: 5 }]}>
                        <View style={styles.rowCenter}>
                            <Text style={{ color: '#B5C0C8', fontWeight: '500' }}>232 predicted under</Text>
                        </View>
                        <View style={styles.rowCenter}>
                            <Text style={{ color: '#B5C0C8', fontWeight: '500' }}>123 predicted over</Text>
                        </View>
                    </View>
                </View>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={{ flex: 1, backgroundColor: '#00000030', justifyContent: 'flex-end' }}>
                    <View style={{
                        height: respHeight / 2 + 120,
                        width: respWidth,
                        backgroundColor: '#FFFFFF',
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        paddingHorizontal: 15,
                        paddingTop: 30
                    }}>
                        <Text style={{
                            color: '#333333',
                            fontSize: 16,
                            fontWeight: '600'
                        }}>Your Prediction is Under</Text>
                        <Text style={{
                            color: '#727682',
                            fontSize: 12,
                            fontWeight: '600',
                            marginTop: 15
                        }}>ENTRY TICKETS</Text>
                        <View style={{ height: respHeight / 3 }}>
                            <ScrollPicker
                                ref={ref}
                                dataSource={numberArray}
                                highlightColor="#f2f2f2"
                                wrapperBackground='#fff'
                                highlightBorderWidth={2}
                                selectedIndex={index}
                            />
                        </View>
                        <View style={{
                            marginTop: 10,
                            fontSize: 12,
                            fontWeight: '500'
                        }}>
                            <Text style={{ color: '#B5C0C8' }}>You can win</Text>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}>
                                <Text style={{
                                    color: '#03A67F',
                                    fontSize: 14,
                                    fontWeight: '600',
                                    marginTop: 5
                                }}>$2000</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ color: '#727682' }}>Total</Text>
                                    <View style={[styles.coinsStyle, { marginTop: 0, marginRight: 10 }]} />
                                    <Text style={{ color: '#333333', fontWeight: '600', fontSize: 14 }}>5</Text>
                                </View>
                            </View>
                        </View>
                        <TouchableOpacity
                            onPress={() => goToNext()}
                            style={{
                                width: respWidth - 40,
                                height: respHeight * 0.07,
                                backgroundColor: '#6231AD',
                                borderRadius: 50,
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: respHeight * 0.05
                            }}>
                            <Text style={{
                                fontSize: 14,
                                color: '#fff',
                                fontWeight: '600',
                                letterSpacing: 0.5
                            }}>Submit my prediction</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </Modal>
        </View>
    )
}

export default Page1;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingTop: 20
    },
    titleTextStyle: {
        color: '#000',
        fontSize: 16,
        letterSpacing: 0.8,
        fontWeight: '700'
    },
    purpleView: {
        width: respWidth - 40,
        alignSelf: 'center',
        backgroundColor: '#6231AD',
        padding: 12
    },
    underOverTextStyle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#D2BAF5'
    },
    infoIconStyle: {
        height: 15,
        width: 15,
        resizeMode: 'contain',
        marginHorizontal: 8
    },
    startingTextStyle: {
        fontSize: 16,
        fontWeight: '400',
        color: '#B296DC',
        letterSpacing: 0.5
    },
    rowSpace: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowCenter: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    bitcointText1: {
        width: respWidth / 2,
        fontSize: 14,
        fontWeight: '500',
        marginTop: respHeight * 0.015,
        lineHeight: 20
    },
    bitCoinText2: {
        color: '#fff',
        fontWeight: '600'
    },
    headingText: {
        color: '#B5C0C8',
        fontSize: 12,
        lineHeight: 15,
        fontWeight: '500',
    },
    descTextStyle: {
        color: '#333333',
        fontSize: 14,
        fontWeight: '600',
        marginTop: respHeight * 0.003
    },
    coinsStyle: {
        height: 15,
        width: 15,
        borderRadius: 15 / 2,
        backgroundColor: '#FFD600',
        alignSelf: 'center',
        marginTop: 2,
        marginLeft: 8
    },
    whyPredictText: {
        color: '#727682',
        fontSize: 14,
        fontWeight: '600',
        lineHeight: 20
    },
    underBtnStyle: {
        width: respWidth / 2 - 50,
        height: respHeight * 0.07,
        borderRadius: 50,
        marginTop: respHeight * 0.025,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    underTextStyle: {
        fontSize: 16,
        color: '#FFFFFF',
        fontWeight: '600',
        letterSpacing: 0.8,
        lineHeight: 20
    },
    arrowIcon: {
        height: respHeight * 0.035,
        width: respWidth * 0.035,
        resizeMode: 'contain',
        marginHorizontal: 8
    }
});
