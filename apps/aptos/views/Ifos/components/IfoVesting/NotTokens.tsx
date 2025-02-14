import { useTranslation } from '@pancakeswap/localization'
import { Flex, Text, BunnyPlaceholderIcon } from '@pancakeswap/uikit'

const NotTokens: React.FC<React.PropsWithChildren> = () => {
  const { t } = useTranslation()

  return (
    <Flex flexDirection="column">
      <BunnyPlaceholderIcon width={80} height={80} margin="auto" />
      <Flex flexDirection="column" alignItems="center" mt="16px" mb="24px">
        <Text bold mb="8px" textAlign="center">
          {t('You have no tokens available for claiming')}
        </Text>
        <Text fontSize="14px" color="textSubtle" textAlign="center">
          {t('Participate in our next IFO.')}
        </Text>
      </Flex>
    </Flex>
  )
}

export default NotTokens
