import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Alert, StyleSheet} from 'react-native';

export default class ModalExample extends Component {
	state = {
		modalVisible: false,
	};

	setModalVisible(visible) {
		this.setState({modalVisible: visible});
	}

	render() {
		return (
			<View style={styles.container}>
				<Modal
					animationType="slide"
					transparent={true}
					visible={this.state.modalVisible}
					onRequestClose={() => {
						Alert.alert('Modal has been closed.');
					}}>
					<View style={styles.popup}>
						<View>
							<Text>Hello World!</Text>
							<TouchableHighlight
								onPress={() => {
									this.setModalVisible(!this.state.modalVisible);
								}}>
								<Text>Hide Modal</Text>
							</TouchableHighlight>
						</View>
					</View>
				</Modal>

				<TouchableHighlight
					onPress={() => {
						this.setModalVisible(true);
					}}>
					<Text>Show Modal</Text>
				</TouchableHighlight>
			</View>
		);
	}
}


const styles = StyleSheet.create({
	container: {
		zIndex: 9,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(255,255,0,0.6)',
		position: 'absolute',
		width: '100%',
		height: '100%',
		top: 0,
		left: 0,
	},
	popup: {
		width: 120,
		height: 120,
		backgroundColor: 'rgba(255,0,0,0.6)',
		borderRadius: 15,
		position: 'absolute',
		left: '50%',
		top: '50%',
		marginLeft: -60,
		marginTop: -60,
}
});