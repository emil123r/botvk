const {
	VK,
	updates,
	Keyboard
} = require('vk-io');

let bot = new Flooder('fdaa94ec170faa99e0be2a5f8d4fcd9dd42fb563a563f7b91c2d93c29822bda76f0d1596b74bc727d0bdd',190853593);
function Flooder (access_token, group_id)
{
	let vk = new VK(),
		request = require('request'),
		chats = require('./data/chats.json'),
		users = require('./data/users.json'),
		whitelist = require('./data/whitelist.json'),
		utils = require('./meta/utils.js');

	vk.setOptions({
		token: access_token,
		apiMode: 'parallel_selected',
		pollingGroupId: group_id
	});

	vk.updates.startPolling();

	vk.updates.on('message', async (message) => {
		if(message.isUser)
		{
			if(message.isOutbox) return;
			if(/^(��� �� �����)/i.test(message.text))
			{
				return message.send({
					message: '������� - ��� ��� ����� �����������/�����.\n������ �������� ��� ����� ������/�������� �������? �������� ���� � ���, � �� ���� �������, ��� �� �����!\n\n��������: ��� ������ � ��������������� �����! ����� �� ����� ��������������� �� ����������� �� ����� ��������'
				})
			}
			if(/^(?:���� �������� ����)/i.test(message.text))
			{
				return message.send({
					message: '�� ������ �������� ���� � ������.\n\n����������: \n1. ������� � ���� ������\n2. ������� ������ <<�������� � ������>> ��� <<���������� � ������>> ��� ������� ���� <<�����������>>\n3. �������� ������\n4. ����� ������ � ������������ ���� �������� @raidmachine �����',
					keyboard: Keyboard.keyboard([
						Keyboard.textButton({
							label: '�����!',
							color: Keyboard.POSITIVE_COLOR
						}),
						Keyboard.textButton({
							label: '� �� �����!',
							color: Keyboard.NEGATIVE_COLOR
						}),
						Keyboard.textButton({
							label: '��������� �����'
						})
					])
				})
			}
			if(/(vk\.(com|me)\/join\/[a-z0-9_]+)/i.test(message.text))
			{
				let args = message.text.match(/(vk\.(com|me)\/join\/[a-z0-9_]+)/i);
				args[1] = args[1].replace('https', '')
				args[1] = args[1].replace('http', '')
				args[1] = args[1].replace(':', '')
				args[1] = args[1].replace('//', '')
				await message.joinChatByInviteLink('https://' + args[1])
				return message.send('������ ���������')
			}
			if(/(������)/i.test(message.text))
			{
				message.reply('����������� �����������!', {
					keyboard: Keyboard.keyboard([
						Keyboard.textButton({
							label: '��� �� �����?'
						}),
						Keyboard.textButton({
							label: '���� �������� ���� � ������!'
						})
					])
				})
				return message.send({
					user_id: 462951787,
					message: '��� ��� ��������� ������ �� *id' + message.senderId + ' (������������)\n\n�����: ' + message.text
				})
			}
			if(/(�� ��������)/i.test(message.text))
			{
				return message.send({
					message: '��� ����� �� �������� ������������ �� ��������\n�� ����������� ���� �������� �� ���� �� ��������� �����'
				})
			}
			if(/(^�����|�� ����|�����)/i.test(message.text))
			{
				return message.send({
					message: '��.',
					keyboard: Keyboard.keyboard([
						Keyboard.textButton({
							label: '��� �� �����?'
						}),
						Keyboard.textButton({
							label: '���� �������� ���� � ������!'
						})
					])
				})
			}
			if(/(�� �����)/i.test(message.text))
			{
				return message.send('��������� ���������� � ����� �����:', {
					attachment: 'wall-170300337_3'
				})
			}
			if(/(�� ����|)/i.test(message.text))
			{
				return message.send({
					message: `� ���� �� ������� �� ��� ������ :(\n\n������� �� ������ ������`,
					keyboard: Keyboard.keyboard([
						Keyboard.textButton({
							label: '��� �� �����?'
						}),
						Keyboard.textButton({
							label: '���� �������� ���� � ������!'
						})
					])
				})
			}
		}
		if(message.isChat)
		{
			if(/(����|cid)/i.test(message.text))
			{
				return message.reply(`ID ������ ` + message.chatId)
			}
			if(whitelist.includes(message.chatId)) return;
			if(chats.includes(message.chatId))
			{
				chats.push(message.chatId)
				await message.send({
					chat_id: message.chatId,
					message: '?????????????????????????????????+????????>??????>??????>??????>????+????>????+????>??????>??????>??????>??????>????????????>????+??????+?????????????????????????????????????????????????????????????????????????????????O??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????+????????????+??????+??????+??????+??????+??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????+????????>??????>??????>??????>????+????>????+????>??????>??????>??????>??????>????????????>????+??????+?????????????????????????????????????????????????????????????????',
					attachment: utils.pick(['photo-170300337_456239020', 'photo-169488967_456239019', 'photo462951787_456261250', 'photo462951787_456261169'])
				})
				await message.send({
					chat_id: message.chatId,
					message: '?????????????????????????????????+????????>??????>??????>??????>????+????>????+????>??????>??????>??????>??????>????????????>????+??????+?????????????????????????????????????????????????????????????????????????????????O??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????+????????????+??????+??????+??????+??????+??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????+????????>??????>??????>??????>????+????>????+????>??????>??????>??????>??????>????????????>????+??????+?????????????????????????????????????????????????????????????????',
					attachment: utils.pick(['photo-170300337_456239020', 'photo-169488967_456239019', 'photo462951787_456261250', 'photo462951787_456261169'])
				})
				await message.send({
					chat_id: message.chatId,
					message: '?????????????????????????????????+????????>??????>??????>??????>????+????>????+????>??????>??????>??????>??????>????????????>????+??????+?????????????????????????????????????????????????????????????????????????????????O??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????+????????????+??????+??????+??????+??????+??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????+????????>??????>??????>??????>????+????>????+????>??????>??????>??????>??????>????????????>????+??????+?????????????????????????????????????????????????????????????????',
					attachment: utils.pick(['photo-170300337_456239020', 'photo-169488967_456239019', 'photo462951787_456261250', 'photo462951787_456261169'])
				})
				await message.send({
					chat_id: message.chatId,
					message: '?????????????????????????????????+????????>??????>??????>??????>????+????>????+????>??????>??????>??????>??????>????????????>????+??????+?????????????????????????????????????????????????????????????????????????????????O??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????+????????????+??????+??????+??????+??????+??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????+????????>??????>??????>??????>????+????>????+????>??????>??????>??????>??????>????????????>????+??????+?????????????????????????????????????????????????????????????????',
					attachment: utils.pick(['photo-170300337_456239020', 'photo-169488967_456239019', 'photo462951787_456261250', 'photo462951787_456261169'])
				})
				await message.send({
					chat_id: message.chatId,
					message: '?????????????????????????????????+????????>??????>??????>??????>????+????>????+????>??????>??????>??????>??????>????????????>????+??????+?????????????????????????????????????????????????????????????????????????????????O??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????+????????????+??????+??????+??????+??????+??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????+????????>??????>??????>??????>????+????>????+????>??????>??????>??????>??????>????????????>????+??????+?????????????????????????????????????????????????????????????????',
					attachment: utils.pick(['photo-170300337_456239020', 'photo-169488967_456239019', 'photo462951787_456261250', 'photo462951787_456261169'])
				})
				await message.send({
					chat_id: message.chatId,
					message: kasha,
					attachment: utils.pick(['photo-170300337_456239020', 'photo-169488967_456239019', 'photo462951787_456261250', 'photo462951787_456261169'])
				})
			}
			if(message.isOutbox) return;
			const a = setInterval(() => {
				message.send({
					message: utils.pick([
						'?????????????????????????????????+????????>??????>??????>??????>????+????>????+????>??????>??????>??????>??????>????????????>????+??????+?????????????????????????????????????????????????????????????????????????????????O??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????+????????????+??????+??????+??????+??????+??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????+????????>??????>??????>??????>????+????>????+????>??????>??????>??????>??????>????????????>????+??????+?????????????????????????????????????????????????????????????????',
						kasha
					]),
					attachment: utils.pick(['photo462951787_456260159', 'photo-170300337_456239020', 'photo-169488967_456239019', 'photo462951787_456261250', 'photo462951787_456261169'])
				})
			}, 1000)
			setTimeout(() => {
				clearInterval(a)
			}, 60000)
			let presents = utils.pick(['�����', '������ �������', '��� ���� ����������', '�����!', '�� ���� ������', '������', '����� ����� ������', '��� ���� ������� �������', '���� �����', '������� �������', '��� ����� ������', '���������', '��� ������', '����', '������'])
			return message.send({
				message: utils.pick([
					'?????????????????????????????????+????????>??????>??????>??????>????+????>????+????>??????>??????>??????>??????>????????????>????+??????+?????????????????????????????????????????????????????????????????????????????????O??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????+????????????+??????+??????+??????+??????+??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????+????????>??????>??????>??????>????+????>????+????>??????>??????>??????>??????>????????????>????+??????+?????????????????????????????????????????????????????????????????',
					kasha
				]),
				keyboard: Keyboard.keyboard([
					Keyboard.textButton({
						label: presents,
						color: Keyboard.POSITIVE_COLOR
					}),
					Keyboard.textButton({
						label: presents,
						color: Keyboard.POSITIVE_COLOR
					}),
					Keyboard.textButton({
						label: presents,
						color: Keyboard.POSITIVE_COLOR
					}),
					Keyboard.textButton({
						label: presents,
						color: Keyboard.POSITIVE_COLOR
					}),
					Keyboard.textButton({
						label: presents,
						color: Keyboard.POSITIVE_COLOR
					}),
					Keyboard.textButton({
						label: presents,
						color: Keyboard.POSITIVE_COLOR
					}),
					Keyboard.textButton({
						label: presents,
						color: Keyboard.POSITIVE_COLOR
					}),
					Keyboard.textButton({
						label: presents,
						color: Keyboard.POSITIVE_COLOR
					})
				]),
				attachment: utils.pick(['photo-170300337_456239020', 'photo-169488967_456239019', 'photo462951787_456261250', 'photo462951787_456261169'])
			})
		}
		message.send({
			chat_id: message.chatId,
			message: '?????????????????????????????????+????????>??????>??????>??????>????+????>????+????>??????>??????>??????>??????>????????????>????+??????+?????????????????????????????????????????????????????????????????????????????????O??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????+????????????+??????+??????+??????+??????+??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????+????????>??????>??????>??????>????+????>????+????>??????>??????>??????>??????>????????????>????+??????+?????????????????????????????????????????????????????????????????',
			attachment: utils.pick(['photo-170300337_456239020', 'photo-169488967_456239019', 'photo462951787_456261250', 'photo462951787_456261169'])
		})
		message.send({
			chat_id: message.chatId,
			message: '?????????????????????????????????+????????>??????>??????>??????>????+????>????+????>??????>??????>??????>??????>????????????>????+??????+?????????????????????????????????????????????????????????????????????????????????O??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????+????????????+??????+??????+??????+??????+??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????+????????>??????>??????>??????>????+????>????+????>??????>??????>??????>??????>????????????>????+??????+?????????????????????????????????????????????????????????????????',
			attachment: utils.pick(['photo-170300337_456239020', 'photo-169488967_456239019', 'photo462951787_456261250', 'photo462951787_456261169'])
		})
	})

	setInterval(() => {
		require('fs').writeFileSync('./data/chats.json', JSON.stringify(chats, null, '\t'))
		require('fs').writeFileSync('./data/users.json', JSON.stringify(users, null, '\t'))
	}, 5000)

}

let kasha = `56#??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????56#??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????56#?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????56#??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????56#??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????56#??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????56#??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????56#????????????????????????????????????????????????????????????????????????????????????????????????????????#??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????`