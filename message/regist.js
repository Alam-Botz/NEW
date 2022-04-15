case 'verify':
	            case 'daftar':
	            if (isBanned) return freply(mess.banned)
				const serials = addSerial(20)
				try {
				ppimg = await Ramdani.getProfilePicture(`${sender.split('@')[0]}@c.us`)
				} catch {
				ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				imglu = 'https://mekpa-result.herokuapp.com/bgverify.jpeg' //ubah sesuka kamu, bisa upload di imgbb.com
				veri = sender
				fs.writeFileSync('./database/user/register.json', JSON.stringify(register))
				addRegist(sender, serials)
				const ramdaniganteng = 
`
┌─ ❑ *Pendaftaran Berhasil!*
├ Nama: ${pushname}
├ Seri: ${serials}
├ Nomor: ${sender.split('@')[0]}
├ Tag: @${sender.split('@')[0]}
├ Pada: ${Tanggal}
├ Pukul: ${jam}
└─ ❑ 

*Ketik .menu Untuk Menampilkan Menu ${namabot}*
`
                let buff = await getBuffer(`${ppimg}`)                
                Ramdani.sendMessage(from, buff, MessageType.image, {quoted: mek, caption: ramdaniganteng, contextInfo: {'mentionedJid': [sender]}})
                break