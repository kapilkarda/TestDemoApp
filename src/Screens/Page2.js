import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    Image,
    TouchableOpacity,
    Modal,
    ScrollView,
    FlatList
} from "react-native";

const respHeight = Dimensions.get('window').height;
const respWidth = Dimensions.get('window').width;

const BadgesArr = [
    {
        name: 'First Stripe Earned',
        desc: 'Top 10% of highest spending players in a month'
    },
    {
        name: 'Born Winner',
        desc: 'Top 10% of highest spending players in a month'
    },
    {
        name: 'Trader of the Month',
        desc: 'Top 10% of highest spending players in a month'
    },
    {
        name: 'Rising Star',
        desc: 'Top 10% of highest spending players in a month'
    },
    {
        name: 'Jackpot',
        desc: 'Top 10% of highest spending players in a month'
    },
    {
        name: 'Impossible',
        desc: 'Top 10% of highest spending players in a month'
    },
    {
        name: 'First Stripe Earned',
        desc: 'Top 10% of highest spending players in a month'
    },
    {
        name: 'Born Winner',
        desc: 'Top 10% of highest spending players in a month'
    },
    {
        name: 'Trader of the Month',
        desc: 'Top 10% of highest spending players in a month'
    },
    {
        name: 'Rising Star',
        desc: 'Top 10% of highest spending players in a month'
    },
]


const Page2 = ({ navigation, ...props }) => {

    const [tabState, setTabState] = useState('Badges');

    const headerView = () => {
        return (
            <View style={styles.headerMainView}>
                <View style={styles.leftRightView}>
                    <Image source={require('../assets/Group7.png')} style={styles.iconStyle} />
                </View>
                <View style={styles.titleView}>
                    <Text style={styles.titleTextSTyle}>Profile</Text>
                </View>
                <View style={styles.leftRightView}>
                    <Image source={require('../assets/Group12544.png')} style={styles.iconStyle} />
                </View>
            </View>
        )
    }

    const profileView = () => {
        return (
            <View style={styles.profileMainView}>
                <Image source={require('../assets/Group60.png')} style={styles.profileImage} />
                <Text style={styles.nameText}>Jina Simons</Text>
                <Text style={styles.pointsText}>
                    6000 Pts
                </Text>
                <Text style={styles.descriptText}>
                    I’m a software developer that has been in the crypto space since 2012. And I’ve seen it grow and falter over a period of time. Really happy to be here!
                </Text>
            </View>
        )
    }

    const logoutView = () => {
        return (
            <View style={{
                justifyContent: 'center',
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15
            }}>
                <Image source={require('../assets/logout.png')} style={{
                    height: respHeight * 0.06,
                    width: respWidth * 0.06,
                    resizeMode: 'contain'
                }} />
                <Text style={{
                    color: '#727682',
                    fontSize: 14,
                    fontWeight: '500',
                    marginLeft: 10,
                    letterSpacing: 0.5
                }}>Logout</Text>
            </View>
        )
    }

    const underOverView = () => {
        return (
            <View style={{
                marginTop: respHeight * 0.05,
                height: respHeight * 0.15,
                width: respWidth - 20,
                borderWidth: 1,
                alignSelf: 'center',
                borderColor: '#EEEAF3',
                padding: 20
            }}>
                <View style={{ position: 'absolute', left: respWidth / 2 - 30, top: -15 }}>
                    <Image source={require('../assets/yellowStar.png')} style={{
                        height: 30,
                        width: 30, resizeMode: 'contain'
                    }} />
                </View>
                <View style={{
                    flexDirection: 'row',
                    marginTop: 10
                }}>
                    <View>
                        <Text style={{
                            color: '#727682',
                            fontSize: 14,
                            fontWeight: '600'
                        }}>Under or Over</Text>
                        <View style={{
                            marginTop: 10,
                            flexDirection: 'row'
                        }}>
                            <Image source={require('../assets/greenUp.png')} style={{ height: 35, width: 35, resizeMode: 'contain' }} />
                            <Text style={{
                                color: '#4F4F4F',
                                fontSize: 24,
                                fontWeight: '700',
                                marginLeft: 10
                            }}>81%</Text>
                        </View>
                    </View>

                    <View style={{
                        marginLeft: 50
                    }}>
                        <Text style={{
                            color: '#727682',
                            fontSize: 14,
                            fontWeight: '600'
                        }}>Top 5</Text>
                        <View style={{
                            marginTop: 10,
                            flexDirection: 'row'
                        }}>
                            <Image source={require('../assets/redDown.png')} style={{ height: 35, width: 35, resizeMode: 'contain' }} />
                            <Text style={{
                                color: '#4F4F4F',
                                fontSize: 24,
                                fontWeight: '700',
                                marginLeft: 10
                            }}>-51%</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    const btnView = () => {
        return (
            <View style={{
                flexDirection: 'row'
            }}>
                <TouchableOpacity
                    onPress={() => setTabState('Games')}
                    style={{
                        height: respHeight * 0.07,
                        width: respWidth / 2,
                        backgroundColor: '#fff',
                        borderBottomWidth: 2,
                        borderBlockColor: tabState === "Games" ? '#6231AD' : '#fff',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                    <Text style={{ color: tabState === "Games" ? '#6231AD' : '#727682' }}>Games played</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setTabState('Badges')}
                    style={{
                        height: respHeight * 0.07,
                        width: respWidth / 2,
                        backgroundColor: '#fff',
                        borderBottomWidth: 2,
                        borderBlockColor: tabState === "Badges" ? '#6231AD' : '#fff',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                    <Text style={{ color: tabState === "Badges" ? '#6231AD' : '#727682' }}>Badges</Text>

                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            {headerView()}
            <ScrollView>
                {profileView()}
                {logoutView()}
                {underOverView()}
                <View style={{
                    height: 2,
                    width: respWidth,
                    backgroundColor: '#F3F2F7',
                    marginTop: 30
                }} />
                {btnView()}
                {tabState === "Games" ?
                    <FlatList
                        data={BadgesArr}
                        style={{ backgroundColor: '#F6F3FA', paddingHorizontal: 10 }}
                        renderItem={({ item, index }) => {
                            return (
                                <View key={index} style={{
                                    backgroundColor: '#fff',
                                    paddingHorizontal: 15,
                                    marginTop: 10,
                                    borderRadius: 5,
                                    paddingVertical: 15,
                                    flexDirection: 'row'
                                }}>
                                    <Image source={require('../assets/Ducky.png')} style={{ height: 60, width: 60, resizeMode: 'contain' }} />
                                    <View style={{
                                        marginLeft: 15
                                    }}>
                                        <Text style={{
                                            color: '#333333',
                                            fontSize: 14,
                                            fontWeight: '500',
                                            lineHeight: 18
                                        }}>{item.name}</Text>
                                        <Text style={{
                                            color: '#727682',
                                            fontSize: 14,
                                            fontWeight: '500',
                                            width: respWidth / 2 + 50,
                                            lineHeight: 18,
                                            marginTop: 5
                                        }}>{item.desc}</Text>
                                    </View>

                                </View>
                            );
                        }}
                    /> : null}

                {tabState === "Badges" ?
                    <FlatList
                        data={BadgesArr}
                        style={{ backgroundColor: '#F6F3FA', paddingHorizontal: 10 }}
                        renderItem={({ item, index }) => {
                            return (
                                <View key={index} style={{
                                    backgroundColor: '#fff',
                                    paddingHorizontal: 15,
                                    marginTop: 10,
                                    borderRadius: 5,
                                    paddingVertical: 15,
                                    flexDirection: 'row'
                                }}>
                                    <Image source={require('../assets/Ducky.png')} style={{ height: 60, width: 60, resizeMode: 'contain' }} />
                                    <View style={{
                                        marginLeft: 15
                                    }}>
                                        <Text style={{
                                            color: '#333333',
                                            fontSize: 14,
                                            fontWeight: '500',
                                            lineHeight: 18
                                        }}>{item.name}</Text>
                                        <Text style={{
                                            color: '#727682',
                                            fontSize: 14,
                                            fontWeight: '500',
                                            width: respWidth / 2 + 50,
                                            lineHeight: 18,
                                            marginTop: 5
                                        }}>{item.desc}</Text>
                                    </View>

                                </View>
                            );
                        }}
                    />
                    : null}
            </ScrollView>

        </View>
    )
}

export default Page2;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headerMainView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: respHeight * 0.02,
        paddingHorizontal: 10
    },
    leftRightView: {
        flex: 0.5,
        alignItems: 'center'
    },
    titleView: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconStyle: {
        height: respHeight * 0.09,
        width: respWidth * 0.09,
        resizeMode: 'contain'
    },
    titleTextSTyle: {
        color: '#727682',
        fontSize: 14,
        fontWeight: '500'
    },
    profileMainView: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    profileImage: {
        height: respHeight * 0.15,
        width: respWidth * 0.25,
        resizeMode: 'contain',
    },
    nameText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#333333'
    },
    pointsText: {
        color: '#727682',
        fontSize: 12,
        fontWeight: '500',
        marginTop: 8
    },
    descriptText: {
        color: '#727682',
        fontSize: 14,
        fontWeight: '500',
        width: respWidth - 60,
        lineHeight: 20,
        letterSpacing: 0.3
    }
});
