const Discord = require ("discord.js")
const fs = require("fs")
const { Client, Attachment } = require('discord.js');
const setprefix = JSON.parse(fs.readFileSync("./prefix.json", "utf8"));
var client = new Discord.Client();
var prefix2 = ('.')
  

client.on('ready', () => {
    console.log('Je suis prêt !');
    setInterval(changing_status, 5000);
  
    function changing_status() {
      let status = [" .help | "+client.guilds.size+" serveurs | "+client.users.size+" users", ".help | "+client.guilds.size+" serveurs | "+client.users.size+" users"]
      let random = status[Math.floor(Math.random() * status.length)]
      client.user.setActivity(random, {type:"STREAMING"})
  }
  
  });
  
  client.on('message', message => {

  	const guildid = message.guild.id
  
 var prefix = ""
if(!setprefix[guildid]){
prefix = "."
}else{
prefix = setprefix[guildid].setprefix
}
  
  	if(message.content.startsWith(prefix + "setprefix")){
  	let args = message.content.split(" ").slice(1);
if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas les permissions requise.");
var msgsub = args[0]
if(!msgsub) return message.channel.send("Merci d'entré un prefix correct.")
if (setprefix[guildid]){
delete setprefix[guildid]
setprefix[guildid] = {"setprefix" : msgsub}
fs.writeFile("./prefix.json", JSON.stringify(setprefix), (err) => 
{if (err) console.error(err);});
message.channel.send("<@"+message.author.id+">, voici le nouveau préfix de votre serveur : `"+msgsub+"`.")
}else{
	setprefix[guildid] = {"setprefix" : msgsub}
fs.writeFile("./prefix.json", JSON.stringify(setprefix), (err) => 
{if (err) console.error(err);});
message.channel.send("<@"+message.author.id+">, voici le nouveau préfix de votre serveur : `"+msgsub+"`.")
}
}

	
	
if(message.content.startsWith(prefix + "mpsend")){
		
if(message.author.id == "421096405914877952") return
var msgsub = message.content.substr(8)
var msgsub2 = message.content.substr(26)
if(!msgsub2) return message.channel.send("Text svp.")
if(!msgsub) return message.channel.send("Id svp.")
client.users.get(msgsub).send(msgsub2)
	}
	
	if(message.content === prefix + "fr-help"){
		if(message.author.bot) return
if(message.channel.type !== 'text') return message.channel.send("***:x: Les commandes en mp sont désactivé !***")
	var user = message.author.username+"#"+message.author.discriminator
	var embed = new Discord.RichEmbed()
	.setColor("RANDOM")
.setDescription("**"+user+", Voici la page d'aide\n\n`"+prefix+"setprefix` = Permet de changer le prefix du bot sur votre serveur.\n\n`"+prefix+"lock` = Permet d'enlever la perm au membre  de parler dans le channel pendant un temps défini.\n\n`"+prefix+"purge` = Permet de  supprimé un nombre de messages entre 0 à 100.\n\n`"+prefix+"invite` = Permet d'avoir tout nos lien.\n\n`"+prefix+"ara` = Permet d'alerté très vite le staff  d'un raid ( mettez le lien du serveur ).\n\n`"+prefix+"ban` = Permet de bannir un membre de votre serveur !\n\n`"+prefix+"kick` = Permet d'expulser un membre de votre serveur ! \n\n`"+prefix+"report` = Envoyez un report / plainte au staff ArA \n\n`"+prefix+"check-id` = Permet de cheek / look si une id est dans notre liste noir / blacklist !\n\n`"+prefix+"ui` = Permet d'avoir des informations sur vous ou sur quelqu'un d'autre ( il faut le mention )\n\n`"+prefix+"ping` = Permet de look la vitesse de connexion du bot !\n\n`"+prefix+"userid [mention-user]` = Permet d'avoir le nom d'utilisateur mentionné et sont id.**\n\n\n**_Liens :_\n[Discord](https://discord.gg/D7qu3F6)\n[Site Internet]:Pas encore dispo\n[Lien d'invitation du bot](https://discordapp.com/oauth2/authorize?client_id=484653588568735745&scope=bot&permissions=335801463)\n[Lien pour être UnBlackList](https://discord.gg/C7zKGY9)**")
.setFooter("Ara - AntiRaidAly 🔒 Dev par Fusion !")
	message.channel.send(embed)
	message.delete()
	}
	
	if(message.content === prefix + "en-help"){
		if(message.author.bot) return
if(message.channel.type !== 'text') return message.channel.send("***:x: Les commandes en mp sont désactivé !***")
	var user = message.author.username+"#"+message.author.discriminator
	var embed = new Discord.RichEmbed()
	.setColor("RANDOM")
.setDescription("**"+user+", Here is the help page\n\n`"+prefix+"setprefix` = Allows you to change the prefix of the bot on your server.\n\n`"+prefix+"lock` = Removes the member's permission to speak in the channel for a set time.\n\n`"+prefix+"purge` = Deletes a number of messages from 0 to 100.\n\n`"+prefix+"invite` = Allows us to have all our links.\n\n`"+prefix+"ara` = Allows to quickly alert the staff of a raid (put the server link).\n\n`"+prefix+"ban` = To ban a member of your server!\n\n`"+prefix+"kick` = Exit a member of your server!\n\n`"+prefix+"report` = Send a report / complaint to the ArA staff \n\n`"+prefix+"check-id` = Lets cheek / look if an id is in our black / blacklist!\n\n`"+prefix+"ui` = Allows you to have information about yourself or someone else (you have to mention it)\n\n`"+prefix+"ping` = Let's look at the connection speed of the bot!\n\n`"+prefix+"userid [mention-user]` = Allows to have the user name mentioned and are id.**\n\n\n**_Links :_\n[Discord](https://discord.gg/D7qu3F6)\n[Website]:Not yet available\n[Bot invitation link](https://discordapp.com/oauth2/authorize?client_id=484653588568735745&scope=bot&permissions=335801463)\n[Link to be UnBlackList](https://discord.gg/C7zKGY9)**")
.setFooter("Ara - AntiRaidAly 🔒 Dev By Fusion !")
	message.channel.send(embed)
	message.delete()
	}
	
	if(message.content === prefix2 + "help"){
		if(message.author.bot) return
if(message.channel.type !== 'text') return message.channel.send("***:x: Les commandes en mp sont désactivé !***")
	var user = message.author.username+"#"+message.author.discriminator
	var embed = new Discord.RichEmbed()
	.setColor("RANDOM")
	.setDescription("**Vous voulez avoir la commandes help en français ?**```"+prefix+"fr-help```\n\n**You want to have help in English?**```"+prefix+"en-help```")
.setFooter("Ara - AntiRaidAly 🔒 Dev par Fusion !")
	message.channel.send(embed)
	message.delete()
	}
	
	if(message.content === prefix + "invite"){
		message.channel.send("**Notre serveur Discord : https://discord.gg/D7qu3F6\n\nLe lien d'invitation du bot : https://discordapp.com/oauth2/authorize?client_id=484653588568735745&scope=bot&permissions=335801463\n\nNotre serveur pour être Unblacklist : https://discord.gg/C7zKGY9 - Voici tout nos lien.**")
	}
	
if(message.content.startsWith(setprefix + "ban")) {
        if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send(":x: | **Vous n'avez pas la premissions pour ban.**\n:x: | **You do not have permission to ban.**");
const user = message.mentions.users.first();

        if(message.mentions.users.size === 0) {
            return message.channel.send(":x: | **Vous devez mentionner un utilistaur.**\n:x: | **You must mention a user.**");
        }

        var ban = message.guild.member(message.mentions.users.first());
        if(!ban) { 
            return message.channel.send("Je ne sais pas si l'utilisateur existe")
        }

        if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
            return message.channel.send(":x: | **Je n'ai pas la permission pour ban.**\n:x: | **I do not have permission to ban.**");
        }
        ban.ban().then(member => {
            message.channel.send(`\`${user.tag}\` à été ban par \`${message.author.username}\`.`)
        }

        )
    }          if(message.content.startsWith(setprefix + "kick")) {
        if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send(":x: | **Vous n'avez pas la permissions pour kick.**\n:x: | **You do not have permission to kick!**");
const user = message.mentions.users.first();

        if(message.mentions.users.size === 0) {
            return message.channel.send(":x: | **Vous devez mentionner un utilistaur.**\n:x: | **You must mention a user.**")
        }

        var kick = message.guild.member(message.mentions.users.first());
        if(!kick) {
            return message.channel.send(":x: | **Je ne sais pas si l'utilisateur existe.**\n:x: | **I do not know if the user exists.**")
        }

        if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
            return message.channel.send(":x: | **Je n'ai pas la permission pour kick.**\n:x: | **I do not have permission to kick.**");
        }
        
        kick.kick().then(member => { 
            message.channel.send(`✅ | \`${user.tag}\` à été expulser par \`${message.author.username}\`.`)
        });
    }
    
    if(message.content.startsWith(prefix + "purge")){
if(message.author.bot) return
if(message.channel.type !== 'text') return message.channel.send("***:x: Les commandes en mp sont désactivé !***")
if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas la permission pour clear !");
let args = message.content.split(" ").slice(1);
if(!args[0]) return message.channel.send(":x: | **Tu doit préciser un nombre a suprimer !**")
message.channel.bulkDelete(args[0]).then(() => {
message.channel.send(`✅ | ${args[0]} message supprimées ! 🗑 `).then(msg => msg.delete(1400));
message.delete()
})
}


	
	if(message.content.startsWith(prefix2 + "gunban")){
	if(message.channel.type !== 'text') return message.channel.send("***:x: Les commandes en mp sont désactivé !***")
if(message.author.bot) return
if(message.author.id == "421096405914877952" || message.author.id == "205008283587575809" || message.author.id == "442606535173210112" || message.author.id == "277479581391257600" || message.author.id == "343680590807302146"){
let bc = JSON.parse(fs.readFileSync("./bc.json", "utf8"));
let msgsub = message.content.substr(8)
if(!msgsub) return message.channel.send(":x: | **Veuillez introduire une id valide !**")
delete bc[msgsub]
	fs.writeFile("./bc.json", JSON.stringify(bc), (err) => 
{if (err) console.error(err);});
message.channel.send(`<a:poplol:464782889104441344> - ***Cet utilisateur a bien été UnBlacklist !*** - <a:poplol:464782889104441344>`)
client.fetchUser(msgsub).then(user => { 
var embed = new Discord.RichEmbed()
.setColor("ff0000")
.setDescription("**Username unblacklist :** `"+user.tag+"`\n\n**"+message.author.username+"#"+message.author.discriminator+", id unblacklist : `"+msgsub+"`**")
client.channels.find('id', "515570492011184132").send(embed)
})
message.delete()
}else{
	}
}

	if(message.content.startsWith(prefix +"test")){
if(message.channel.type !== 'text') return message.channel.send("***:x: Les commandes en mp sont désactivé !***")
if(message.author.bot) return
if(message.author.id == "421096405914877952" || message.author.id == "442606535173210112" || message.author.id == "277479581391257600" || message.author.id == "343680590807302146"){
return message.channel.send("⚠ - **Tu n'a pas les permissions pour blacklist !** - ⚠")
}else{
	message.content.includes("<@")
let args = message.content.split(" ").slice(1);
let bc = JSON.parse(fs.readFileSync("./bc2.json", "utf8"));
const msgsub = args[0]
const msgsub1 = message.content.substr(25)
if (bc[msgsub]) {
            return message.channel.send(":x: Erreur: **ID** déjà black list ");
            }
if(!msgsub) return message.channel.send(":x: | **Veuillez introduire une id valide !**")
bc[msgsub] = {"bc" : "`" + msgsub1 + "`"}
fs.writeFile("./bc2.json", JSON.stringify(bc), (err) => 
{if (err) console.error(err);});
message.channel.send(`✅ - ***Cet utilisateur a bien été Blacklist !*** - ✅`)
client.fetchUser(msgsub).then(user => { 
var embed = new Discord.RichEmbed()
.setColor("ff0000")
.setDescription("**Username blacklist :** `"+user.tag+"`\n\n**"+message.author.username+"#"+message.author.discriminator+", id blacklist : `"+msgsub+"`\nRaison : `" + msgsub1 +"`**")
client.channels.find('id', "515570492011184132").send(embed)

})
message.delete()
	}
 }
 
 
if(message.content.startsWith(prefix2 +"gban")){
if(message.channel.type !== 'text') return message.channel.send("***❌ Les commandes en mp sont désactivé !***")
if(message.author.bot) return
if(message.author.id == "421096405914877952" || message.author.id == "205008283587575809" || message.author.id == "442606535173210112" || message.author.id == "277479581391257600" || message.author.id == "343680590807302146"){

let args = message.content.split(" ").slice(1);
let bc = JSON.parse(fs.readFileSync("./bc.json", "utf8"));

const idduraideur = args[0]
if(!idduraideur) return message.channel.send("❌ | **Veuillez introduire une id valide !**")
const toutargs = message.content.substr(24)
const raison = toutargs.replace(idduraideur, "")
if(!raison) return message.channel.send("Intrduit une raison.")

if (bc[idduraideur ]) {
            return message.channel.send("❌ Erreur: **ID** déjà black list ");
            }

bc[idduraideur] = {"bc" : "`" + raison + "`"}
fs.writeFile("./bc.json", JSON.stringify(bc), (err) => 
{if (err) console.error(err);});
message.channel.send(`✅ - ***Cet utilisateur a bien été Blacklist !*** - ✅`)
client.fetchUser(idduraideur).then(user => { 
var embed = new Discord.RichEmbed()
.setColor("ff0000")
.setDescription("**Username blacklist :** `"+user.tag+"`\n\n**"+message.author.username+"#"+message.author.discriminator+", id blacklist : `"+idduraideur+"`\nRaison : `" + raison +"`**")
client.channels.find('id', "515570492011184132").send(embed)

})
message.delete()
}else{
    return message.channel.send("⚠ - **Tu n'a pas les permissions pour blacklist !** - ⚠")
    }
 }
 
 if(message.content.startsWith(prefix + "check-id")){
 	if(message.channel.type !== 'text') return message.channel.send(":x: ***Les commandes en mp sont désactivées !***")
 let bc = JSON.parse(fs.readFileSync("./bc.json", "utf8"));
	if(message.author.bot) return
var msgsub = message.content.substr(10)
var msgsub2 = message.content.substr(19)
if(!msgsub) return message.channel.send("⚠ - **Veuillez introduire une vrai id !** - ⚠")
 if(!msgsub2) return message.channel.send("Ce n'est pas un id.")
		if (bc[msgsub]){
			var embed = new Discord.RichEmbed()
.setColor("#0xec2c2c")
.setTitle("🚨 BlackList 🚨")
.addField("💡 Raison", bc[msgsub].bc)
.addField(":id:", msgsub)
.setFooter("Anti-raid 🚫 | "+message.author.username+"#"+message.author.discriminator)
	message.channel.send(embed)
	}else{
		var embed2 = new Discord.RichEmbed()
		.setColor("#0x30d13a")
		.setDescription("Cet utilisateur n'est pas dans notre liste noir ( "+msgsub+" )")
		.setFooter("Anti-raid 🚫 | "+message.author.username+"#"+message.author.discriminator)
		message.channel.send(embed2)
		}
		}

 
 
	
	if(message.content.startsWith(prefix + "report")){
		if(message.channel.type !== 'text') return message.channel.send(":x: ***Les commandes en mp sont désactivées !***")
		if(message.author.bot) return
		var msgsub = message.content.substr(8)
	if(!msgsub) return message.channel.send(":x: | **Veuillez entré une raison !**")
		var embed = new Discord.RichEmbed()
		.setColor("RANDOM")
		.addField("⛔ Report de :", ":id: "+message.author.id+" | username "+message.author.username+"#"+message.author.discriminator)
		.addField("🚫 Son message :", msgsub)
		.setFooter("Report ⚠")
		client.channels.find('id', "511657569018707988").send(embed)
		message.delete()
	}
	
	if(message.content.startsWith(prefix + "ara")){
if(message.channel.type !== 'text') return message.channel.send("❌ ***Les commandes en mp sont désactivées !***")
		if(message.author.bot) return
var ara = message.content.substr(5)
if(!ara) return message.channel.send("**Entrez un message svp.**")
var y = new Discord.RichEmbed()
.setColor("ff0000")
.addField("```Alerte 🚨```", "`🚔 Nous avons été alerté par une alerte !`")
.addField("```🌐 Auteur du message :```", "`"+message.author.username+"#"+message.author.discriminator+"`")
.addField("```🔔 Le message :```", ara)
.setFooter("{ Alerte 🚨 AntiRaidAly 🔒 }")
message.channel.send("**Tous le staff AntiRaidAly à été alerté ! 🚨**").then(msg => msg.delete(2000))
client.channels.find("id", "521731248872226826").send(y)
client.channels.find("id", "521731248872226826").send("<@&479934619005878272>")
message.delete()
}
 
	
	if(message.content === prefix + "ping"){
    if(message.author.bot) return
	  if(message.channel.type !== 'text') return message.channel.send("***:x: Les commande en mp sont désactivé !***")
        var help2_embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .addField("Pong :ping_pong:", "**L'API** discord a pris " + Math.round(client.ping) + " ms pour répondre");
        message.channel.send(help2_embed)
        message.delete(message.content)
    }
	
	
	if(message.content.startsWith(prefix + "userid")){
		var mentions = message.mentions.users.first();
var msgsub = message.content.substr(8)
   if(!msgsub) return message.channel.send("**Veuillez bien ajouter une id.**")
 if (mentions) {
            var mention2 = mentions;
        } else {
            var mention2 = message.author;
        }
        if(message.author.bot) return
        if(message.channel.type !== 'text') return message.channel.send(":x: ***Les commandes en mp sont désactivées !***")
        client.fetchUser(msgsub).then(user => {
message.author.send("Pseudo : `"+user.tag+"`\nId : "+msgsub)
})
   message.delete()
}
	
	if(message.content.startsWith(prefix + "sayembed")){
if(message.author.id !== '421096405914877952') return
		var say1 = message.content.substr(10)
		var say = message.content.substr(17)
		if(!say1) return message.channel.send("**Veuillez introduire une couleur exemple : ```.sayembed 00ff00 Coucou```**")
		if(!say)return message.channel.send("**Veuillez introduire un texte exemple : ```.sayembed 00ff00 Coucou```**")
		var embed = new Discord.RichEmbed()
		.setColor(`${say1}`)
		.setDescription(say)
		.setFooter("SayEmbed 1.1 :)")
		message.delete()
		message.channel.send(embed)
		}
	
	
	if(message.content.startsWith(prefix + "lock")) {
  if (!message.member.permissions.has("MANAGE_CHANNELS")) return message.channel.send("Tu n'as pas la permission d'éffectuer cela.");
  if (!message.guild.member(client.user).hasPermission('MANAGE_CHANNELS')) return message.reply(" Désolé, je n'ai pas la permission de faire cette commande, j'ai besoin de MANAGE_CHANNELS. :x:")
let args = message.content.split(" ").slice(1);

  const ms = require('ms');
  if (!client.lockit) client.lockit = [];
  const time = args.join(' ');
  const validUnlocks = ['release', 'unlock', 'stop', 'off'];
  if (!time) return message.reply('⌛ Vous devez définir une durée de verrouillage en heures, minutes ou secondes');

  if (validUnlocks.includes(time)) {
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: true
    }).then(() => {
      message.channel.send('```🔒 Verrouillage Terminé.```');
      clearTimeout(client.lockit[message.channel.id]);
      delete client.lockit[message.channel.id];
    }).catch(error => {
      console.log(error);
    });
  } else {
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: false
    }).then(() => {
      message.channel.send(`🔒 Channel verrouillé pour ${ms(ms(time), { long:true })}`).then(() => {

        client.lockit[message.channel.id] = setTimeout(() => {
          message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true
          }).then(message.channel.send('```🔓 Verrouilage terminé```'))
          delete client.lockit[message.channel.id];
        }, ms(time));
      }).catch(error => {
        console.log(error);
      });
    });
  }
}
	
	
	if(message.content.startsWith(prefix + "ui")) {
	if(message.channel.type !== 'text') return message.channel.send(":x: ***Les commandes en mp sont désactivées !***")
	if(message.author.bot) return
	var mentions = message.mentions.users.first();
if(!mentions) return message.channel.send(":x: **Veuillez mentionné un utilisateur !**")

    if (mentions) {
            var mention2 = mentions;
        } else {
            var mention2 = message.author;
        }
if(mention2.presence.status === "dnd"){
var presencefinal = "❤ Ne pas déranger"
}else if(message.author.presence.status === "idle"){
var presencefinal = "💛 Inactif"
}else if(mention2.presence.status === "online"){
	var presencefinal = "💚 En ligne"
	}
if(!mention2.bot){
var bot = "Non."
}else if(mention2.bot){
var bot = "Oui."
}
var bc = JSON.parse(fs.readFileSync("./bc.json", "utf8"));
var username = mention2.username
var tag = mention2.discriminator
var id = mention2.id
var embed = new Discord.RichEmbed()
.setColor("RANDOM")
.addField("```User-Info```", "⚠")
.addField("📋 Nom d'utilisateurs :", username + "#" + tag, true)
.addField("🆔 :", id, true)
.addField("🔨 Tu est en :", presencefinal, true)
.addField("🤖 Bot :", bot, true)
.addField("📃 BlackList :", "🔧 Oui 🔧")
.setFooter("Anti-Raid 🚫")
if(bc[mention2.id]){
message.channel.send(embed)
var mentions = message.mentions.users.first();
message.delete()
}else{
var embed2 = new Discord.RichEmbed()
	.setColor("RANDOM")
.addField("```User-Info```", "⚠")
.addField("📋 Nom d'utilisateurs :", username + "#" + tag, true)
.addField("🆔 :", id, true)
.addField("🔨 Tu est en :", presencefinal, true)
.addField("🤖 Bot :", bot, true)
.addField("📃 BlackList :", "🔧 Non 🔧")
.setFooter("Anti-Raid 🚫")
message.channel.send(embed2)
var mentions = message.mentions.users.first();
}
message.delete()
}
	
	
	
	
	
	})



client.on("guildMemberAdd", mem => {
let bc = JSON.parse(fs.readFileSync("./bc.json", "utf8"));
if(bc[mem.id]){
mem.ban()
var embed = new Discord.RichEmbed()
.setColor("#ff0000")
.setDescription(mem.id+"( "+mem.user+"), à été banni de votre serveur ("+mem.guild.name+") car il se trouve dans notre liste noir ! 📌")
.setFooter("Anti-Raid 🚫")
mem.guild.owner.createDM().then(chan => chan.send(embed))
}
})




client.on('guildCreate', message => {
	message.owner.createDM().then(chan => chan.send("**Bonjour, merci d'avoir ajouter AntiRaidAly Bot sur votre serveur, si vous avez des problème mineurs faite nous en part et venez sur le serveur discord ( lien dans le .help ), en cas d'urgence faite .report ! 📌**"))
var owner = message.owner
var ownerid = message.owner.id
var guild = message.name 
client.fetchUser(ownerid).then(user => { 
var embed = new Discord.RichEmbed()
.setColor("00ff00")
.setDescription("**Merci au serveur `"+guild+"` d'avoir ajouté le bot, le fondateur de cette guild est "+owner+" (`"+user.tag+"`) sont id est "+ownerid+"  la guild a "+message.memberCount+" membres, nous sommes maintenant à : "+client.guilds.size+" serveurs**")
client.channels.find('id', "515580919780737035").send(embed)
})
})


function clean(text) {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
        const clean = text => {
            if (typeof(text) === "string")
              return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
            else
                return text;
          }
  }

  

client.on("message", message => {
    let args = message.content.split(" ").slice(1);
  
    if (message.content.startsWith("ara!eval")) {
      if(message.author.id !== "421096405914877952") return;
      
      try {
        const code = args.join(" ");
        let evaled = eval(code);
  
        if (typeof evaled !== "string")
          evaled = require("util").inspect(evaled);
  
        message.channel.send(clean(evaled), {code:"xl"});
      } catch (err) {
        message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
      }
    }
  });

 client.on('guildDelete', message => {
	message.owner.createDM().then(chan => chan.send("**Bonjour, vous avez décidé d'enlever le bot AntiRaidAly de votre serveur, remetez le quelques fois pour voir les nouveauté.**"))
var guild = message.name
var owner = message.owner
var ownerid = message.owner.id
var embed = new Discord.RichEmbed()
client.fetchUser(ownerid).then(user => { 
var embed = new Discord.RichEmbed()
.setColor("ff0000")
.setDescription("**Un serveur a enlevé le bot, le nom de la guild est `"+guild+"`, le fondateur de cette guild est "+owner+" (`"+user.tag+"`) sont id est "+ownerid+" la guild a "+message.memberCount+" membres, nous sommes maintenant à : "+client.guilds.size+" serveurs**")
client.channels.find('id', "515580919780737035").send(embed)
})
})

client.on('guildMemberAdd', member => {
 	var channel = member.guild.channels.find(ch => ch.id === '479919656631533569') ;
	if(!channel) return
	var embed = new Discord.RichEmbed()
	.setColor("00ff00")
	.setDescription("**🔔 | Un nouveaux utilisateur sur le discord | 🔔**")
	.addField("**😃 | Il s'agit de :**", member.user)
	.addField("**📜 | Nous sommes maintenant a :**", member.guild.memberCount+" membres")
	channel.send(embed)
	})

client.login("NDg0NjUzNTg4NTY4NzM1NzQ1.DsIqIA.oOvFSPhVOniSX0CC5WUV9g9udE0")
