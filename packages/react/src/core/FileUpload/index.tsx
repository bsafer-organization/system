import { Button } from '../Button'
import { IconButton } from '../IconButton'
import { Text } from '../Text'
import { OverflowText } from '../OverflowText'

import {
  ClipboardClose,
  ClipboardTick,
  Danger,
  ExportSquare,
  Receipt1,
  Trash,
  ImportCurve
} from 'iconsax-react'
import { useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { FileUploadContainer, OptionalBadge } from './styles'

interface IAcceptedFiles {
  [key: string]: string[]
}

interface ISupportedFiles {
  [key: string]: {
    [key: string]: string[]
  }
}

const defaultSupportedFiles: ISupportedFiles = {
  pdf: {
    'application/pdf': ['.pdf']
  },
  jpeg: {
    'image/jpeg': ['.jpeg', '.jpg']
  },
  png: {
    'image/png': ['.png']
  },
  docx: {
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': [
      '.docx'
    ]
  },
  doc: {
    'application/msword': ['.doc']
  }
}

type SupportedFilesKeys = keyof typeof defaultSupportedFiles

export interface FileUploadProps {
  /**
   * Uploaded or attached file
   */
  file?: File | string

  /**
   * Render a error message text below the component
   */
  error?: string

  /**
   * Disable the component
   * @default false
   */
  disabled?: boolean

  /**
   * Handle the component changes (adding or removing files).
   */
  onChangeFile?: (file?: File) => void

  /**
   * Component label
   * @default 'Arquivo da Guia'
   */
  label?: string

  /**
   * Render a badge with text 'Opcional'
   * @default false
   */
  optional?: boolean

  /**
   * List of supported files.\
   * Available options:
   * - pdf
   * - png
   * - jpeg
   * - docx
   * - doc
   * @example ['pdf', 'png']
   * @default ['pdf']
   */
  supportedFiles?: SupportedFilesKeys[]
}

export const FileUpload = ({
  error,
  file,
  disabled = false,
  onChangeFile,
  label = 'Arquivo da Guia',
  optional = false,
  supportedFiles = ['pdf']
}: FileUploadProps) => {
  let acceptedFileExtensions: IAcceptedFiles = {}

  supportedFiles.forEach((extension) => {
    const filteredDefaultSupportedFiles = Object.keys(
      defaultSupportedFiles
    ).filter(
      (defaultSupportedFilesExt) => defaultSupportedFilesExt === extension
    )[0]

    const supportedFilesSelectedByUser =
      defaultSupportedFiles[filteredDefaultSupportedFiles as SupportedFilesKeys]

    acceptedFileExtensions = {
      ...acceptedFileExtensions,
      ...supportedFilesSelectedByUser
    }
  })

  const acceptedFileExtensionsCSV = '.' + supportedFiles.join(', .')

  const {
    isDragActive,
    isDragAccept,
    isDragReject,
    getRootProps,
    getInputProps
  } = useDropzone({
    onDropAccepted,
    accept: acceptedFileExtensions
  })

  const [attachedFile, setAttachedFile] = useState<File | string | null>(null)

  const isAttachedFileInstanceOfFile = attachedFile instanceof File

  const fileUrl = isAttachedFileInstanceOfFile
    ? URL.createObjectURL(attachedFile)
    : attachedFile

  const fileType = isAttachedFileInstanceOfFile
    ? attachedFile.type
    : 'application/pdf'

  const isWordFile =
    isAttachedFileInstanceOfFile &&
    (attachedFile.type ===
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
      attachedFile.type === 'application/msword')

  async function onDropAccepted(acceptedFiles: File[]) {
    if (onChangeFile) onChangeFile(acceptedFiles[0])
    setAttachedFile(acceptedFiles[0])
  }

  function removeFile() {
    if (onChangeFile) onChangeFile(undefined)
    setAttachedFile(null)
  }

  function handleViewFile() {
    if (fileUrl) {
      window.open(fileUrl, '_blank')
    }
  }

  useEffect(() => {
    if (file && disabled) {
      setAttachedFile(file)
    }
  }, [file, disabled])

  return (
    <div
      className={`flex flex-col p-5 rounded ${error ? 'bg-assistant-red-light' : 'bg-grey-100'
        }`}
    >
      <header className="flex items-center mb-4">
        <div className="flex justify-start items-center gap-2">
          <Text size="xs" weight="bold">
            {label}
          </Text>
          {optional && <OptionalBadge>Opcional</OptionalBadge>}
        </div>
        {disabled && (file || attachedFile) && (
          <>
            {isWordFile ? (
              <Button
                size="sm"
                color="default"
                variant="text"
                type="button"
                endIcon={<ImportCurve />}
                className="ml-auto"
                onClick={handleViewFile}
              >
                Fazer download
              </Button>
            ) : (
              <Button
                size="sm"
                color="default"
                variant="text"
                type="button"
                endIcon={<ExportSquare />}
                className="ml-auto"
                onClick={handleViewFile}
              >
                Visualizar arquivo
              </Button>
            )}
          </>
        )}
        {!disabled && (
          <div className="ml-auto flex items-center">
            {(file || attachedFile) && (
              <>
                <IconButton
                  size="sm"
                  variant="text"
                  color="default"
                  type="button"
                  onClick={removeFile}
                >
                  <Trash />
                </IconButton>

                {isWordFile ? (
                  <IconButton
                    size="sm"
                    variant="text"
                    color="default"
                    type="button"
                    onClick={handleViewFile}
                  >
                    <ImportCurve />
                  </IconButton>
                ) : (
                  <IconButton
                    size="sm"
                    variant="text"
                    color="default"
                    type="button"
                    onClick={handleViewFile}
                  >
                    <ExportSquare />
                  </IconButton>
                )}
              </>
            )}
          </div>
        )}
      </header>
      <div className="flex-1 overflow-hidden">
        {!fileUrl && (
          <FileUploadContainer
            isDragAccept={isDragAccept}
            isDragReject={isDragReject}
            {...getRootProps()}
          >
            <input {...getInputProps()} disabled={disabled} />
            {isDragActive && isDragAccept && (
              <>
                <ClipboardTick size={24} className="text-assistant-blue-main" />
                <Text size="sm" color="assistant-blue-main">
                  Solte o arquivo e aguarde carregar
                </Text>
              </>
            )}

            {isDragActive && isDragReject && (
              <>
                <ClipboardClose size={24} className="text-assistant-red-main" />
                <Text size="sm" color="assistant-red-main">
                  Arquivo não suportado
                </Text>
              </>
            )}

            {!isDragActive && (
              <>
                <Receipt1 size={24} />
                <Text size="sm">
                  Arrate o arquivo ou{' '}
                  <Text
                    size="sm"
                    color="assistant-blue-main"
                    className="cursor-pointer"
                  >
                    clique aqui para carregar
                  </Text>
                </Text>
                <Text size="xs" color="grey-700">
                  Arquivos suportados: {acceptedFileExtensionsCSV}
                </Text>
              </>
            )}
          </FileUploadContainer>
        )}
        {fileUrl && !isWordFile && (
          <embed
            src={fileUrl}
            type={fileType}
            className="w-full min-h-[200px] rounded-lg"
          />
        )}
        {fileUrl && isWordFile && (
          <OverflowText>{attachedFile.name}</OverflowText>
        )}
      </div>
      {error && (
        <footer className="text-assistant-red-main flex items-center gap-2 mt-2">
          <Danger size={16} />
          <Text size="xs">{error}</Text>
        </footer>
      )}
    </div>
  )
}
